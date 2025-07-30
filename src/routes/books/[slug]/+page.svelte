<script>
	import Meta from "$components/Meta.svelte";

	let { data } = $props();
	const title = "";
	const description = "";
	const url = "";
	const social = "";
</script>

<Meta {url} {title} {description} {social}></Meta>

<p>{data.book.id}</p>
