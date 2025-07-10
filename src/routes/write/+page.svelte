<script>
	import data from "$data/sheet.csv";
	import Meta from "$components/Meta.svelte";
	import Gemini from "./Gemini.svelte";
	import Filters from "./Filters.svelte";
	import Tools from "./Tools.svelte";
	import Story from "./Story.svelte";
	import { cento } from "$runes/cento.svelte.js";

	$effect(() => {
		cento.lines = [
			"p",
			...data.slice(0, 3),
			"p",
			...data.slice(3, 6),
			"p",
			...data.slice(6, 9)
		];
	});
</script>

<Meta hide={true} />

<div class="c">
	<div class="ui">
		<h1>Cento Fiction Maker</h1>
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
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		background: lightblue;
		padding: 1em;
		margin: 0;
		height: 100svh;
		overflow-y: scroll;
		width: 480px;
	}
	hr {
		margin-top: 1em;
	}

	.story {
		margin-left: 480px;
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
	}
</style>
