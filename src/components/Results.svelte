<script>
	import { base } from "$app/paths";
	import { Pagination } from "bits-ui";
	import ChevronLeft from "@lucide/svelte/icons/chevron-left";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

	const { results } = $props();

	const perPage = 10;
	let count = $derived(results ? results.length : 0);
	let page = $state(1);
	let visibleResults = $derived(
		results ? results.slice((page - 1) * perPage, page * perPage) : []
	);

	function clean(id) {
		return id
			.toLowerCase()
			.replace(/[^a-z0-9]/g, "")
			.trim();
	}
</script>

<div class="c">
	<ul>
		{#each visibleResults as { title, text, author, id } (id)}
			{@const href = `${base}/books/${clean(id)}`}
			{@const truncated =
				text.length > 100
					? text.slice(0, text.indexOf(" ", 200)) + "..."
					: text}
			<li>
				<p class="title-author">
					<a {href}>
						<strong>{title}</strong>
					</a>
					by {author}
				</p>
				<p class="text">
					{truncated}
				</p>
			</li>
		{/each}
	</ul>
	<div class="pagination">
		<Pagination.Root {count} {perPage} bind:page>
			{#snippet children({ pages, range })}
				<div class="pagination-content">
					<Pagination.PrevButton>
						<ChevronLeft />
					</Pagination.PrevButton>

					<p>
						Showing {range.start} - {range.end} of {count}
					</p>

					<Pagination.NextButton>
						<ChevronRight />
					</Pagination.NextButton>
				</div>
			{/snippet}
		</Pagination.Root>
	</div>
</div>

<style>
	ul {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.text {
		display: flex;
		flex-direction: column;
	}

	.pagination-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 32px auto;
		width: 20em;
	}

	.pagination-content p {
		margin: 0;
		width: 12em;
		text-align: center;
	}
</style>
