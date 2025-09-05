<script>
	import Category from "$components/Explore.Category.svelte";
	import loadJson from "$utils/loadJson.js";

	const cats = [
		{
			title: "Things",
			prop: "nouns"
		},
		{
			title: "Places",
			prop: "places"
		},
		{
			title: "Actions",
			prop: "verbs"
		},
		{
			title: "Descriptions",
			prop: "adjectives"
		},
		{
			title: "Days of the week",
			prop: "days"
		},
		{
			title: "Months of the year",
			prop: "months"
		}
	];

	let categories = $state([]);

	const base = "https://pudding.cool/projects/oldb-data";

	$effect(async () => {
		const c = await loadJson(`${base}/explore-categories.json`);
		categories = cats.map((d) => ({
			...d,
			options: c[d.prop]
		}));
	});
</script>

<section id="explore" class="c">
	<h2>Explore</h2>
	{#each categories as { title, prop, options }}
		<Category {title} {prop} {options} />
	{/each}
</section>
