<script>
	const { results } = $props();
</script>

<div class="c">
	{#each results as { title, author, id } (id)}
		<div class="result">
			<!-- <a {href}> -->
			<p><strong>{title}</strong> by {author}</p>
			<!-- </a> -->
		</div>
	{/each}
</div>
