<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children: Snippet<[]>;
	};

	let { href, children }: Props = $props();
</script>

<li class="bg-titan-white-500 hover:bg-dark-gold-400">
	<a {href}>
		<div class="p-3">
			{@render children()}
		</div></a
	>
</li>
