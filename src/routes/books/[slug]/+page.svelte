<script>
	import Meta from "$components/Meta.svelte";

	let { data } = $props();
	const title = "";
	const description = "";
	const url = "";
	const social = "";
</script>

<Meta {url} {title} {description} {social}></Meta>

<div>
	<p>{data.title}</p>
	<p>{data.author}</p>
	<p>{data.text}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 32px;
	}
</style>
