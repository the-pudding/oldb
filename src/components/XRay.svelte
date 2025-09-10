<script>
	import highlight from "$utils/highlight.js";
	const { adjectives, nouns, verbs, text } = $props();

	const highlights = [
		...JSON.parse(adjectives).map((a) => ({ ...a, type: "adjective" })),
		...JSON.parse(nouns).map((n) => ({ ...n, type: "noun" })),
		...JSON.parse(verbs).map((v) => ({ ...v, type: "verb" }))
	];

	const marked = highlight({ text, highlights });
</script>

<span class="xray">
	{@html marked}
</span>

<style>
	.xray {
		display: block;
		line-height: 1.4;
	}

	:global(.xray mark.noun) {
		background-color: rgba(255, 0, 0, 0.5);
	}

	:global(.xray mark.verb) {
		background-color: rgba(0, 255, 0, 0.5);
	}

	:global(.xray mark.adjective) {
		background-color: rgba(0, 0, 255, 0.5);
	}
</style>
