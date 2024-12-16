<script lang="ts">
	import { Motion } from 'svelte-motion';

	type Props = {
		word: string;
		class: string;
		duration?: number;
		variant?: {
			hidden: { filter: string; opacity: number };
			visible: { filter: string; opacity: number };
		};
	};

	let {
		word = 'Blur In',
		duration = 1,
		class: className = '',
		variant = {
			hidden: { filter: 'blur(10px)', opacity: 0 },
			visible: { filter: 'blur(0px)', opacity: 1 }
		}
	}: Props = $props();
</script>

<Motion initial="hidden" animate="visible" transition={{ duration }} variants={variant} let:motion>
	<h1 class={className} use:motion>
		{word}
	</h1>
</Motion>
