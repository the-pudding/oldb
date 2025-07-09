<script>
	import data from "$data/sheet.csv";
	import Meta from "$components/Meta.svelte";
	import Gemini from "./Gemini.svelte";
	import Filters from "./Filters.svelte";
	import Tools from "./Tools.svelte";
	import Story from "./Story.svelte";

	let story = $state(data.slice(0, 10));
</script>

<Meta hide={true} />

<div class="c">
	<div class="ui">
		<h1>Story Writer</h1>
		<Tools></Tools>
		<hr />

		<Filters></Filters>
		<hr />

		<Gemini></Gemini>
	</div>
	<div class="story">
		<Story content={story}></Story>
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
		margin: 1em 0;
	}

	.story {
		margin-left: 480px;
		padding: 1em;
		background: lightyellow;
		width: 100%;
		height: 100svh;
		overflow-y: scroll;
	}
</style>
