<script>
	// shadow, plain, line, bubble
	import { format, timeFormat } from "d3";
	import logo from "$svg/oldb-logo.svg";

	let count = $state("over 10,000");
	let updated = $state("since August 1, 2025");
	let ready = $state(false);

	$effect(async () => {
		const response = await fetch(
			`https://pudding.cool/projects/oldb-data/latest.json?version=${Date.now()}`
		);
		if (response.ok) {
			const data = await response.json();
			count = format(",")(data.count);
			updated = `as of ${timeFormat("%B %d, %Y")(new Date(data.updated))}`;
		} else {
			console.error("Failed to fetch the latest data");
		}
		ready = true;
	});
</script>

<div class="c">
	<div class="logo">
		{@html logo}
	</div>
	<h1>Opening Line Database</h1>
	<p class="tagline">A searchable database of opening lines from fiction</p>
	<p class="meta" class:ready><strong>{count}</strong> books {updated}</p>
</div>

<style>
	.c {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		line-height: 1;
		font-size: var(--40px);
		font-weight: bold;
		font-family: var(--sans);
	}

	p {
		margin: 0;
		font-size: var(--20px);
		line-height: 1.25;
		text-align: center;
	}

	.logo {
		max-width: 10em;
		margin: 0 auto;
	}

	.tagline {
		margin-bottom: 8px;
	}

	.meta {
		opacity: 0;
		transition: opacity 0.25s ease-in-out;
		color: var(--color-gray-600);
		font-size: var(--16px);
	}

	.meta.ready {
		opacity: 1;
	}
</style>
