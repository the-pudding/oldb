<script>
	import Plus from "@lucide/svelte/icons/plus";
</script>

<div class="c">
	<h2>Filters</h2>
	<div>
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

	<div class="results">
		<ul>
			<li>
				<button><span><Plus></Plus></span></button>Sentence tk here.
			</li>
			<li>
				<button><span><Plus></Plus></span></button>Sentence tk here.
			</li>
		</ul>
	</div>
</div>

<style>
	.results {
		height: 250px;
		overflow-y: scroll;
		padding-top: 1em;
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
		align-items: center;
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
