<script>
	import { cento } from "$runes/cento.svelte.js";
	import Plus from "@lucide/svelte/icons/plus";

	let { data } = $props();

	let lines = $derived.by(() => {
		return data.slice(0, 10);
	});

	function onAdd(line) {
		cento.lines.push(line);
	}
</script>

<div class="c">
	<h3>Filters</h3>
	<details>
		<summary>Toggle Filters</summary>
		<div class="filters">
			<div>
				<label for="search">Search</label>
				<input type="text" placeholder="Search for word..." />
			</div>

			<div>
				<label for="filter">POV</label>
				<select>
					<option>All</option>
					<option>First Person</option>
					<option>Second Person</option>
					<option>Third Person</option>
				</select>
			</div>
			<div>
				<label for="filter">Dialogue</label>
				<select>
					<option>All</option>
				</select>
			</div>
			<div>
				<label for="filter">Tense</label>
				<select>
					<option>All</option>
				</select>
			</div>

			<div>
				<label for="filter">Has character name</label>
				<select>
					<option>All</option>
				</select>
			</div>

			<div>
				<label for="filter">Is metaphor</label>
				<select>
					<option>All</option>
				</select>
			</div>

			<div>
				<label for="filter">Is similie</label>
				<select>
					<option>All</option>
				</select>
			</div>

			<div>
				<label for="filter">Approach</label>
				<select>
					<option>All</option>
				</select>
			</div>
		</div>
	</details>

	<div class="results">
		<ul>
			{#each lines as line}
				<li>
					<button onclick={() => onAdd(line)}><span><Plus></Plus></span></button
					>
					{line.value}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.results {
		height: 250px;
		overflow-y: scroll;
		padding-top: 1em;
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		margin-bottom: 1em;
		font-size: var(--16px);
		display: flex;
		align-items: flex-start;
	}

	button {
		font-size: var(--16px);
		padding: 0.25em;
		margin-right: 0.25em;
	}

	button span {
		display: inline-block;
		width: 1em;
	}
</style>
