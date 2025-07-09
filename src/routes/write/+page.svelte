<script>
	import Meta from "$components/Meta.svelte";
	import Gemini from "./Gemini.svelte";
	import Filters from "./Filters.svelte";
	import Tools from "./Tools.svelte";
	import Story from "./Story.svelte";
	let { data } = $props();
</script>

<Meta hide={true} />

<div class="c">
	<div class="ui">
		<h1>Story Writer</h1>
		<Gemini></Gemini>
		<hr />

		<Filters></Filters>
		<hr />

		<Tools></Tools>
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
		background: #ccc;
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
		background: #efefef;
		width: 100%;
		height: 100svh;
		overflow-y: scroll;
	}
</style>
