<script>
	let { content } = $props();

	let selected = $state(null);

	function onToggle(i) {
		selected = i;
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
					<button>¶</button>
					<button>+</button>
				</span></span
			>
		{/each}
	</p>
</div>

<style>
	p {
		line-height: 1.6;
		user-select: none;
		font-size: var(--24px);
	}

	.line {
		padding: 0.25em 0;
		position: relative;
		cursor: pointer;
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
		background: #000;
		padding: 0.5em;
		color: #fff;
		z-index: var(--z-overlay);
		width: 20em;
	}

	.line:hover .tip {
		display: block;
	}

	.line:hover .buttons {
		opacity: 1;
	}

	.buttons {
		display: inline-flex;
		gap: 0.25em;
		opacity: 0;
		margin-right: 0.25em;
	}

	button {
		font-size: var(--16px);
		padding: 0.125em;
		margin: 0;
	}
</style>
