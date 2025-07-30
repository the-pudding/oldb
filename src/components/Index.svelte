<script>
	import { getContext } from "svelte";
	import Day from "$components/Day.svelte";
	import Search from "$components/Search.svelte";

	import Footer from "$components/Footer.svelte";

	// const copy = getContext("copy");
	// const data = getContext("data");
</script>

<Day></Day>
<Search></Search>
<svelte:boundary onerror={(e) => console.error(e)}>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
