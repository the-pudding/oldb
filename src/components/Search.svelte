<script>
	import { browser } from "$app/environment";
	import { createClient } from "@supabase/supabase-js";
	import { Select } from "bits-ui";
	import Results from "$components/Results.svelte";

	let supabase;

	let results = $state(null);
	let err = $state(null);
	let query = $state("");
	let column = $state("text");
	let disabled = $state(false);
	$inspect(results);

	export async function search(e) {
		e.preventDefault();
		console.time("search");
		if (!query || query.trim() === "") {
			err = "Please enter a search term.";
			results = null;
			return;
		}

		try {
			disabled = true;
			const { data, error } = await supabase
				.from("oldb")
				.select("id,title,author")
				.textSearch(column, query.trim(), {
					type: "websearch"
				})
				.order("title", { ascending: true })
				.limit(100);

			if (error) {
				console.error("Search error:", error);
				err = "Search failed. Please try again.";
				results = null;
			} else {
				results = data || [];
				err = null;
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			err = "Something went wrong. Please try again.";
			results = null;
		} finally {
			query = "";
			disabled = false;
		}

		console.timeEnd("search");
	}

	$effect(() => {
		if (browser) {
			supabase = createClient(
				"https://dbmtysppmiwwjwaeneex.supabase.co",
				"sb_publishable_4iMeGBcBrV3i_iAemu4tuw_5NDTN77K"
			);
		}
	});
</script>

<div id="search" class="c">
	<h2>Database Search</h2>

	<form class="ui" onsubmit={search}>
		<div class="input-group">
			<label for="search-input">Search</label>
			<input
				id="search-input"
				type="text"
				placeholder="Enter a search term..."
				bind:value={query}
				{disabled}
			/>
		</div>

		<div class="select-group">
			<label for="select-field">Field</label>
			<select id="select-field" bind:value={column} {disabled}>
				<option value="text">Text</option>
				<option value="title">Title</option>
				<option value="author">Author</option>
			</select>
		</div>

		<button id="search-button" type="submit" {disabled}>Search</button>
	</form>
	<p class="advanced"><button class="link">advanced filters</button></p>

	<div class="results">
		{#if err}
			<p class="error">{err}</p>
		{:else if results}
			{#if results.length > 0}
				<Results {results} />
			{:else}
				<p class="no-results">No results found.</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		max-width: var(--col-width);
		margin: 32px auto;
		padding: 16px;
	}

	h2 {
		font-size: var(--28px);
		margin-bottom: 16px;
		font-weight: bold;
	}

	.ui {
		display: flex;
		align-items: flex-end;
		gap: 8px;
	}

	.ui > div {
		display: flex;
		flex-direction: column;
	}

	input,
	select {
		line-height: 1;
		outline: none;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius);
		height: var(--input-height);
		background-color: var(--color-input-bg);
		vertical-align: top;
		padding: 0 8px;
	}

	.input-group {
		flex: 2;
	}

	.select-group {
		flex: 1;
	}

	button {
		height: var(--input-height);
	}

	.advanced {
		margin: 0;
	}

	.results {
		min-height: 120px;
	}
</style>
