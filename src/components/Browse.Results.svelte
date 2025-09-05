<script>
	import { base } from "$app/paths";
	import { Pagination } from "bits-ui";
	import ChevronLeft from "@lucide/svelte/icons/chevron-left";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

	const { results } = $props();

	const perPage = 40;
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
		{#each visibleResults as { title, author, id }}
			{@const hasId = !!id}
			{@const href = hasId ? `${base}/books/${clean(id)}` : "#"}
			<li>
				<a {href}>
					{#if hasId}
						<strong>{title}</strong> by <span>{author}</span>
					{:else}
						<strong>{author}</strong>
					{/if}
				</a>
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
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		margin: 16px auto;
	}

	li {
		list-style-type: none;
		width: 25%;
		margin-bottom: 8px;
		padding-right: 8px;
	}

	strong {
		display: block;
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
