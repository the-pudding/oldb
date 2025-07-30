<script>
	import { cento } from "$runes/cento.svelte.js";
	import Trash from "@lucide/svelte/icons/trash";
	import Pilcrow from "@lucide/svelte/icons/pilcrow";
	import TypeOutline from "@lucide/svelte/icons/type-outline";

	let selected = $state(null);

	let grafs = $derived.by(() => {
		let all = [];
		let current = [];

		let i = 0;

		for (let item of cento.lines) {
			if (item === "p") {
				// add prev to the grafs array
				if (current.length > 0) all.push(current);
				// reset current
				current = [{ i }];
			} else current.push({ ...item, i });
			i++;
		}

		if (current.length > 0) all.push(current);

		return all;
	});

	function onGraf(e, i) {
		e.stopPropagation();
		// insert a "p" just after line i
		cento.lines.splice(i + 1, 0, "p");
		selected = null;
		// grafs = [...grafs];
	}

	function onTrash(e, i) {
		e.stopPropagation();
		// delete line i from cento.lines
		cento.lines = cento.lines.filter((_, index) => index !== i);
		selected = null;
		// grafs = [...grafs];
	}

	// function onText(i) {}

	function onToggle(i) {
		if (selected === i) selected = null;
		else selected = i;
	}
</script>

<div class="c">
	{#each grafs as p}
		<p>
			{#each p as { md5, value, title, author, i }}
				{@const t = title?.split("(")[0]}
				{@const a = author?.split("|")[0]}
				{@const active = i === selected}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				{#if value}
					<span class="line" class:active onclick={() => onToggle(i)}
						>{value}<span class="tip">{t} - {a}</span>
						<span class="buttons">
							<span class="inner">
								<button onclick={(e) => onTrash(e, i)}><Trash></Trash></button>
								<button onclick={(e) => onGraf(e, i)}
									><Pilcrow></Pilcrow></button
								>
								<!-- <button onclick={() => onText(i)}
								><TypeOutline></TypeOutline></button
							> -->
							</span>
						</span></span
					>
				{:else}
					<span class="fake-p" class:active onclick={() => onToggle(i)}>
						<span class="buttons">
							<span class="inner">
								<button onclick={(e) => onTrash(e, i)}><Trash></Trash></button>
							</span>
						</span>
					</span>
				{/if}

				{#if i === cento.lines.length - 1 && !selected}
					<span class="cursor"></span>
				{/if}
			{/each}
		</p>
	{/each}
</div>

<style>
	.c {
		padding: 4em;
	}

	p {
		line-height: 1.6;
		user-select: none;
		font-size: var(--24px);
		margin: 0;
	}

	:global(.expand .story p) {
		font-size: var(--18px);
		line-height: 1.4;
	}

	.fake-p {
		position: relative;
		display: block;
		width: 100%;
		height: 1em;
		background: lightgoldenrodyellow;
	}

	.line {
		padding: 0.25em 0;
		position: relative;
		cursor: pointer;
		vertical-align: middle;
		font-family: var(--serif);
	}

	.line:hover,
	.fake-p:hover {
		background: gold;
	}

	.line.active,
	.fake-p.active {
		background: plum;
	}

	.tip {
		display: none;
		position: absolute;
		bottom: 100%;
		background: #000;
		padding: 0.5em;
		color: #fff;
		z-index: var(--z-overlay);
		width: 20em;
	}

	.line:hover .tip {
		display: block;
	}

	.buttons {
		position: relative;
		display: inline-block;
		visibility: hidden;
		pointer-events: none;
		vertical-align: text-bottom;
	}

	.inner {
		position: absolute;
		bottom: 0;
		right: 0.25em;
		gap: 2px;
		display: inline-flex;
		z-index: var(--z-overlay);
		width: 4em;
		justify-content: flex-end;
		align-items: center;
		transform: translateY(0.125em);
	}

	.active .buttons {
		visibility: visible;
		pointer-events: auto;
	}

	button {
		font-size: var(--16px);
		padding: 0.25em;
		border: 2px solid #fff;
	}

	.cursor {
		display: inline-block;
		width: 0.5em;
		height: 1em;
		background: plum;
		margin-left: 0.25em;
		vertical-align: middle;
		animation: blink 1s infinite step-end;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
