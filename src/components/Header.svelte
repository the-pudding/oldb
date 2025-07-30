<script>
	// shadow, plain, line, bubble
	import logo from "$svg/oldb-logo.svg";
</script>

<header>
	<div class="top">
		<div class="acronym"><strong>OLDb</strong></div>
		<div class="links">
			<a href="#">search</a>
			<a href="#">submit a book</a>
			<a href="#">about</a>
		</div>
	</div>
	<div class="bottom">
		<div class="logo">
			{@html logo}
		</div>
		<h1>Opening Line Database</h1>
		<p>
			The opening line from <strong>10,119</strong> works of fiction in one searchable
			database
		</p>
	</div>
</header>

<style>
	header {
		padding: 16px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.acronym {
		font-family: var(--sans);
		background: var(--color-primary);
		padding: 8px;
		border-radius: var(--border-radius);
	}

	.links {
		display: flex;
		gap: 16px;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		line-height: 1;
		font-size: var(--16px);
		font-size: var(--40px);
		font-weight: bold;
		font-family: var(--sans);
	}

	p {
		margin: 0;
		font-size: var(--32px);
		font-size: var(--20px);
		line-height: 1.25;
		text-align: center;
	}

	.logo {
		max-width: 10em;
		margin: 0 auto;
	}
</style>
