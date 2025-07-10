<script>
	import Trash from "@lucide/svelte/icons/trash";
	import Pilcrow from "@lucide/svelte/icons/pilcrow";
	import TypeOutline from "@lucide/svelte/icons/type-outline";

	let { content } = $props();

	let selected = $state(null);

	function onToggle(i) {
		if (selected === i) selected = null;
		else selected = i;
	}
</script>

<div class="c">
	<p>
		{#each content as { value, title, author }, i}
			{@const t = title.split("(")[0]}
			{@const a = author.split("|")[0]}
			{@const active = i === selected}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span class="line" class:active onclick={() => onToggle(i)}
				>{value}<span class="tip">{i + 1} {t} - {a}</span>
				<span class="buttons">
					<span class="inner">
						<button><Trash></Trash></button>
						<button><Pilcrow></Pilcrow></button>
						<button><TypeOutline></TypeOutline></button>
					</span>
				</span></span
			>
		{/each}

		{#if !selected}
			<span class="cursor"></span>
		{/if}
	</p>
</div>

<style>
	p {
		line-height: 1.6;
		user-select: none;
		font-size: var(--24px);
		padding: 4em;
	}

	.line {
		padding: 0.25em 0;
		position: relative;
		cursor: pointer;
		vertical-align: middle;
		font-family: var(--serif);
	}

	.line:hover {
		background: gold;
	}

	.line.active {
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
		display: none;
		vertical-align: text-bottom;
	}

	.inner {
		position: absolute;
		bottom: 0;
		right: 0;
		display: inline-flex;
		gap: 2px;
		margin-right: 0.25em;
		z-index: var(--z-overlay);
		width: 6em;
		justify-content: flex-end;
		align-items: center;
		transform: translateY(0.125em);
	}

	.active .buttons {
		display: inline-block;
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
