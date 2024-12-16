<script lang="ts">
	import PageFrontHeader from '$lib/components/PageFrontHeader.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		pageHeaderLabel: string;
	};

	let { children, pageHeaderLabel }: Props = $props();
</script>

<div class="flex h-full w-full flex-col overflow-hidden md:flex-row">
	<PageFrontHeader label={pageHeaderLabel} />
	<div
		class="
		flex-1
		snap-y
		snap-mandatory
		overflow-y-scroll
		*:snap-center
		*:snap-always
		"
	>
		{@render children()}
	</div>
</div>
