<script>
	import Glasses from "@lucide/svelte/icons/glasses";
</script>

<div id="lotd" class="c">
	<p class="overline">
		<span>Line of the Day from <strong>1984 by George Orwell</strong></span>
		<a href="#test" role="button"
			><span aria-label="See more details"><Glasses></Glasses></span></a
		>
	</p>

	<blockquote>
		It was a bright cold day in April, and the clocks were striking thirteen.
	</blockquote>

	<p></p>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		max-width: var(--col-width);
		margin: 32px auto;
		padding: 16px;
	}

	.overline {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	blockquote {
		font-size: clamp(1.25rem, 3vw, 3rem);
		line-height: 1.25;
		background: var(--color-secondary);
		padding: 32px;
		border-radius: var(--border-radius);
	}
</style>
