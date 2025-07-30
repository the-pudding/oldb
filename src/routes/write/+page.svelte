<script>
	import data from "$data/sheet.csv";
	import Meta from "$components/Meta.svelte";
	import Gemini from "./Gemini.svelte";
	import Filters from "./Filters.svelte";
	import Tools from "./Tools.svelte";
	import Story from "./Story.svelte";
	import { cento } from "$runes/cento.svelte.js";

	let expand = $state(false);
	// sideways arrow
	let arrow = $derived(expand ? "◄" : "►");

	$effect(() => {
		cento.lines = [
			"p",
			...data.slice(0, 3),
			"p",
			...data.slice(3, 6),
			"p",
			...data.slice(6, 11),
			"p",
			...data.slice(11, 16)
		];
	});
</script>

<Meta hide={true} />

<div class="c" class:expand>
	<div class="ui">
		<h1>
			Cento Fiction Maker <button onclick={() => (expand = !expand)}
				><span>{arrow}</span></button
			>
		</h1>
		<Tools></Tools>
		<hr />

		<Filters {data}></Filters>
		<hr />

		<Gemini></Gemini>
	</div>
	<div class="story">
		<Story></Story>
	</div>
</div>

<style>
	.c {
		display: flex;
	}

	.ui {
		/* position: fixed;
		top: 0;
		left: 0; */
		display: flex;
		flex-direction: column;
		background: lightblue;
		padding: 1em;
		margin: 0;
		height: 100svh;
		overflow-y: scroll;
		width: 30%;
		min-width: 30%;
		max-width: 480px;
	}

	.expand .ui {
		min-width: 65%;
		width: 65%;
		max-width: 960px;
	}

	hr {
		margin-top: 1em;
	}

	.story {
		flex: 1;
		padding: 1em;
		background: lightyellow;
		width: 100%;
		height: 100svh;
		overflow-y: scroll;
	}

	h1 {
		text-transform: uppercase;
		font-weight: bold;
		font-size: var(--20px);
		margin: 0;
		display: flex;
		justify-content: space-between;
	}
</style>
