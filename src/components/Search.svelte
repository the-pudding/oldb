<script>
	import { browser } from "$app/environment";
	import { createClient } from "@supabase/supabase-js";

	let supabase;

	async function search() {
		try {
			const { data } = await supabase
				.from("oldb")
				.select("*")
				.textSearch("title", "harry", { type: "websearch" });

			console.log(data);
		} catch (err) {
			console.error(err);
		}
	}

	$effect(() => {
		if (browser) {
			supabase = createClient(
				"https://dbmtysppmiwwjwaeneex.supabase.co",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibXR5c3BwbWl3d2p3YWVuZWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5NTI0NDUsImV4cCI6MTk2MDUyODQ0NX0.i_1JrAfv5fieeVaiJrVIQPL6V0_-H9sR-PKIuGDAIfI"
			);
		}
	});
</script>

<div id="search" class="c">
	<h2>Search</h2>
	<div>
		<input id="search-input" type="text" placeholder="Enter a search term..." />
		<select>
			<option value="keyword">Keyword</option>
			<option value="title">Title</option>
			<option value="author">Author</option>
		</select>
		<button id="search-button" onclick={search}>Search</button>
	</div>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		max-width: 60rem;
		margin: 32px auto;
		padding: 16px;
	}

	h2 {
		font-size: var(--28px);
		margin-bottom: 16px;
		font-weight: bold;
	}
</style>
