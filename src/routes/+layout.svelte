<script>
	import { page } from "$app/stores";
	import "$styles/app.css";
	import Header from "$components/Header.svelte";

	let { children } = $props();
</script>

{#if !$page.data?.hideHeader}
	<Header />
{/if}
<main id="content">
	{@render children?.()}
</main>
