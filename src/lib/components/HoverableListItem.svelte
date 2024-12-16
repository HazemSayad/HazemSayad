<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<li
	class="hover:before:content-chevron
    relative
    hover:before:absolute
    hover:before:-left-4
    hover:before:font-bold
    hover:before:text-dark-gold-500
    "
>
	{@render children()}
</li>
