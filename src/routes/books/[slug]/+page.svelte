<script>
	import Meta from "$components/Meta.svelte";
	import XRay from "$components/XRay.svelte";
	import CircleUserRound from "@lucide/svelte/icons/circle-user-round";
	import Bot from "@lucide/svelte/icons/bot";

	let { data } = $props();
	const title = "";
	const description = "";
	const url = "";
	const social = "";

	const { text, adjectives, nouns, verbs } = data;
</script>

<Meta {url} {title} {description} {social}></Meta>

<div>
	<p class="top">
		The opening line of <span class="info"
			><span class="title"><strong>{data.title}</strong></span>
			<span class="author">by <strong>{data.author}</strong></span>
		</span>
	</p>

	<blockquote>
		<span class="vetted">
			{#if data.vetted === "human"}<CircleUserRound
				></CircleUserRound>{:else}<Bot></Bot>{/if}
		</span>
		<span class="xray">
			<XRay {text} {adjectives} {nouns} {verbs}></XRay>
		</span>
	</blockquote>

	<code>{JSON.stringify(data, null, 2)}</code>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 32px;
	}

	span.vetted {
		position: absolute;
		display: block;
		width: 32px;
		height: 32px;
		top: 8px;
		right: 8px;
	}

	.top {
		text-align: center;
	}

	span.info {
		display: flex;
		flex-direction: column;
	}

	span.title {
		font-size: 2em;
	}

	blockquote {
		position: relative;
		font-size: clamp(1.25rem, 3vw, 3rem);
		line-height: 1.25;
		background: var(--color-secondary);
		padding: 32px;
		border-radius: var(--border-radius);
	}
</style>
