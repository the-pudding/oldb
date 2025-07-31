<script>
	// shadow, plain, line, bubble
	import logo from "$svg/oldb-logo.svg";
</script>

<div class="c">
	<div class="logo">
		{@html logo}
	</div>
	<h1>Opening Line Database</h1>
	<p>
		A searchable database of <strong>10,912</strong> opening lines from fiction
	</p>
</div>

<style>
	.c {
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
