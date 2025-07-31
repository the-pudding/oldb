<script>
	import Meta from "$components/Meta.svelte";
	import Smile from "@lucide/svelte/icons/smile";
	import Bot from "@lucide/svelte/icons/bot";

	let { data } = $props();
	const title = "";
	const description = "";
	const url = "";
	const social = "";
</script>

<Meta {url} {title} {description} {social}></Meta>

<div>
	<p>
		The opening line of <strong>{data.title}</strong> by
		<strong>{data.author}</strong>
	</p>

	<blockquote>
		<span class="vetted">
			{#if data.vetted === "human"}<Smile></Smile>{:else}<Bot></Bot>{/if}
		</span>{data.text}
	</blockquote>
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

	blockquote {
		position: relative;
		font-size: clamp(1.25rem, 3vw, 3rem);
		line-height: 1.25;
		background: var(--color-primary);
		padding: 32px;
		border-radius: var(--border-radius);
	}
</style>
