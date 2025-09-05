<script>
	import List from "$components/Browse.List.svelte";
	const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const letters = alpha.split("");
</script>

<section id="browse" class="c">
	<h2>Browse</h2>
	<div>
		<List {letters} title="Title" />
	</div>

	<div>
		<List {letters} title="Author" />
	</div>
</section>
