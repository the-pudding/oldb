<script>
	import { base } from "$app/paths";

	const { results } = $props();
	function clean(id) {
		return id
			.toLowerCase()
			.replace(/[^a-z0-9]/g, "")
			.trim();
	}
</script>

<div class="c">
	{#each results as { title, text, author, id } (id)}
		{@const href = `${base}/books/${clean(id)}`}
		{@const truncated =
			text.length > 100 ? text.slice(0, text.indexOf(" ", 200)) + "..." : text}
		<div class="result">
			<p class="text">
				{truncated}
			</p>
			<a {href}>
				<strong>{title}</strong> by {author}
			</a>
		</div>
	{/each}
</div>

<style>
	.text {
		display: flex;
		flex-direction: column;
	}
</style>
