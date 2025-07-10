<script>
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import * as gemini from "$utils/gemini.js";
	let apiKey = $state(undefined);
	let geminiReady = $state(false);

	async function onSetup() {
		if (!apiKey) {
			alert("Please enter your Gemini API key.");
			return;
		}

		try {
			await gemini.setup(apiKey);
			geminiReady = true;
		} catch (err) {
			alert(`Error setting up Gemini AI: ${err.message}`);
		}
	}
</script>

<div class="c">
	<h3><span><Sparkles></Sparkles></span> Suggestions</h3>
	<div class="setup" class:visible={!geminiReady}>
		<p>Enter your Gemini API key below to see suggestions.</p>
		<div class="f">
			<input type="text" placeholder="Gemini key..." bind:value={apiKey} />
			<button onclick={onSetup}>Use</button>
		</div>
	</div>
	<div class="tool" class:visible={geminiReady}>
		<p>Gemini AI is ready and waiting.</p>
	</div>
</div>

<style>
	.c {
		max-width: 480px;
	}

	.f {
		display: flex;
		gap: 1em;
	}

	input {
		width: 100%;
	}

	.c > div {
		display: none;
	}

	.c .visible {
		display: block;
	}

	h3 {
		display: flex;
		align-items: center;
	}

	h3 span {
		display: inline-block;
		width: 1em;
		margin-right: 0.25em;
	}
</style>
