<script>
	import { getContext } from "svelte";
	import Hero from "$components/Hero.svelte";
	import Day from "$components/Day.svelte";
	import Search from "$components/Search.svelte";
	import Browse from "$components/Browse.svelte";
	import Explore from "$components/Explore.svelte";
	import Footer from "$components/Footer.svelte";
	import { ready } from "$runes/misc.svelte.js";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<Hero></Hero>
<Day></Day>
<Search></Search>
{#if ready}
	<Explore></Explore>
	<Browse></Browse>
{/if}
<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
