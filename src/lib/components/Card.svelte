<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		title: string;
		expand?: boolean;
		children: Snippet;
	};

	let { id, title, expand = false, children }: Props = $props();
</script>

<div class="flex h-full flex-col justify-center">
	<h2 class="p-2 text-2xl font-bold text-dark-gold-400 md:text-4xl" {id}>{title}</h2>
	<div class={`px-6 py-4 *:text-base md:*:text-lg ${expand ? 'flex-1' : ''}`}>
		{@render children()}
	</div>
</div>
