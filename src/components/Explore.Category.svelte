<script>
	import { base } from "$app/paths";
	import loadCsv from "$utils/loadCsv.js";
	import { shuffle } from "d3";
	const { title, prop, options = [] } = $props();

	let active = $state(
		options.length
			? options[Math.floor(Math.random() * options.length - 1)]
			: null
	);

	let results = $state([]);

	function clean(id) {
		return id
			.toLowerCase()
			.replace(/[^a-z0-9]/g, "")
			.trim();
	}

	$effect(async () => {
		if (!active) return;

		const raw = await loadCsv(
			`https://pudding.cool/projects/oldb-data/explore/${prop}/${active
				.toLowerCase()
				.replace(/[^a-z0-9]/g, "-")
				.trim()}.csv`
		);

		results = shuffle(raw).slice(0, 3);
	});
</script>

<div class="c">
	<h3>{title}</h3>
	<p>Opening lines with the word <strong>{active}</strong></p>
	<ul>
		{#each results as { text, title, author, id }}
			{@const href = `${base}/books/${clean(id)}`}
			<li>
				<p class="text">
					{text}
				</p>
				<p class="title-author">
					From <a {href}>
						{title}
					</a>
					by {author}
				</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 0;
		display: flex;
	}

	li {
		list-style-type: none;
		padding: 0 8px;
		width: 33.33%;
	}
</style>
