<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<span
	class="
    relative
    inline-block
    before:absolute
    before:inset-0
    before:top-full
    before:block
    before:h-0.5
    before:w-0
    before:bg-dark-gold-500
    before:transition-all
    hover:before:w-full
    "
>
	<strong class="relative"> {@render children()}</strong>
</span>
