<script lang="ts">
	import BlurIn from './BlurIn.svelte';

	type Props = {
		label: string;
	};
	let { label }: Props = $props();
</script>

<div class="relative flex justify-between bg-black-500/30 p-4 md:h-full md:flex-col md:justify-end">
	<div class="flex flex-row md:flex-col lg:flex-row">
		<h1 class="text-end text-3xl font-black md:text-5xl">Hazem</h1>
		<h1 class="pl-2 pt-0 text-end text-3xl font-black md:pl-0 md:pt-1 md:text-5xl lg:pl-2 lg:pt-0">
			Sayad
		</h1>
	</div>
	<BlurIn
		word={label}
		class="
	text-end
	text-2xl
	font-bold
	text-dark-gold-400
	underline
	decoration-2
	underline-offset-8
	md:pt-4
	md:text-4xl
	md:no-underline
	"
	/>
	<div class="hidden md:block md:h-[30%] md:w-full"></div>
</div>
