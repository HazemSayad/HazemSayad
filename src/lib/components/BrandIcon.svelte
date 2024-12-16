<script lang="ts">
	import { Icon, type IconType } from 'svelte-icons-pack';

	type Props = {
		src: IconType;
		color: string;
	};

	let { src, color }: Props = $props();
</script>

<div class="onhover group m-1 rounded-md bg-black-50 p-2" style="--hovercolor:{color};">
	<Icon {src} {color} size="100%" className="h-6 w-6 md:h-10 md:w-10 group-hover:fill-black-50" />
</div>

<style>
	:hover.onhover {
		background-color: var(--hovercolor);
	}
</style>
