<!-- <script>

</script>
 
<Select.Root type="single" onValueChange={(v) => (value = v)} items={themes}>
  <Select.Trigger
    class=""
    aria-label="Select a field"
  >
    {selectedLabel}
    <ChevronsUpDown class="" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content
      class=""
      sideOffset={10}
    >
      <Select.ScrollUpButton class="">
        <CaretDoubleUp class="size-3" />
      </Select.ScrollUpButton>
      <Select.Viewport class="p-1">
        {#each fields as field, i (i + theme.value)}
          <Select.Item
            class="rounded-button data-highlighted:bg-muted outline-hidden data-disabled:opacity-50 flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize"
            value={theme.value}
            label={theme.label}
            disabled={theme.disabled}
          >
            {#snippet children({ selected })}
              {theme.label}
              {#if selected}
                <div class="ml-auto">
                  <Check aria-label="check" />
                </div>
              {/if}
            {/snippet}
          </Select.Item>
        {/each}
      </Select.Viewport>
      <Select.ScrollDownButton class="flex w-full items-center justify-center">
        <CaretDoubleDown class="size-3" />
      </Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
</Select.Root> -->
