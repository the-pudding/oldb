<script>
	const { results } = $props();
	function clean(id) {
		return id
			.toLowerCase()
			.replace(/[^a-z0-9]/g, "")
			.trim();
	}
</script>

<div class="c">
	{#each results as { title, author, id } (id)}
		{@const href = `/books/${clean(id)}`}
		<div class="result">
			<p>
				<a {href}>
					<strong>{title}</strong> by {author}
				</a>
			</p>
		</div>
	{/each}
</div>
