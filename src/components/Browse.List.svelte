<script>
	import Results from "$components/Browse.Results.svelte";
	import loadCsv from "$utils/loadCsv.js";
	const { letters, title } = $props();

	const base = "https://pudding.cool/projects/oldb-data/explore";

	let active = $state(letters[0]);

	let results = $state([]);

	$effect(async () => {
		if (!active) return;

		results = await loadCsv(
			`${base}/${title.toLowerCase()}/${active.toLowerCase()}.csv`
		);
	});
</script>

<div class="c">
	<h3>{title}</h3>
	<ul>
		{#each letters as letter}
			<li>
				<button class="link" onclick={() => (active = letter)}>{letter}</button>
			</li>
		{/each}
	</ul>
	<div class="results">
		<Results {results} />
	</div>
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-right: 8px;
	}
</style>
