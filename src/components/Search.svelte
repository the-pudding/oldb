<div id="search" class="c">
	<h2>Search</h2>
	<div>
		<input id="search-input" type="text" placeholder="Enter a search term..." />
		<select>
			<option value="keyword">Keyword</option>
			<option value="title">Title</option>
			<option value="author">Author</option>
		</select>
		<button id="search-button">Search</button>
	</div>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		max-width: 70em;
		margin: 2em auto;
		padding: 16px;
	}

	h2 {
		font-size: 2em;
		margin-bottom: 16px;
		font-weight: bold;
	}
</style>
