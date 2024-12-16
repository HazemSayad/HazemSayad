<script>
	import ClickableNavBarIcon from './ClickableNavBarIcon.svelte';
	import { HomeIcon, MapIcon, BookmarkIcon, StarIcon } from 'svelte-feather-icons';
	import HoverableNavBarDropdown from './HoverableNavBarDropdown.svelte';
</script>

<nav class="h-fit w-full *:text-black-500 md:h-full md:w-fit">
	<ul
		class="
		flex
		w-full
		list-none
		justify-evenly
		bg-titan-white-500
		p-0
		md:h-full
		md:flex-col
		md:justify-center
		md:*:my-3
		"
	>
		<div class="group">
			<ClickableNavBarIcon href="/">
				<HomeIcon class=" group-hover:stroke-titan-white-500" /></ClickableNavBarIcon
			>
		</div>
		<div class="group md:my-4">
			<ClickableNavBarIcon href="/roadmap">
				<MapIcon class="group-hover:stroke-titan-white-500" /></ClickableNavBarIcon
			>
		</div>
		<div class="group md:my-4">
			<ClickableNavBarIcon href="/useful">
				<BookmarkIcon class="group-hover:stroke-titan-white-500" /></ClickableNavBarIcon
			>
		</div>
		<div class="group md:my-4">
			<ClickableNavBarIcon href="/showcase">
				<StarIcon class="group-hover:stroke-titan-white-500" /></ClickableNavBarIcon
			>
		</div>
		<HoverableNavBarDropdown />
	</ul>
</nav>
