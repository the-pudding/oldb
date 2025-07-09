<script>
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
	<h2>Gemini Assistant</h2>
	<div class="setup" class:visible={!geminiReady}>
		<p>To get recommendations, please enter your Gemini API key below.</p>
		<div class="f">
			<input
				type="text"
				placeholder="Enter your Gemini key..."
				bind:value={apiKey}
			/>
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
</style>
