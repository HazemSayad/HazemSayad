<script lang="ts">
	import { MailIcon, GithubIcon, LinkedinIcon, AtSignIcon } from 'svelte-feather-icons';
</script>

<li
	class="group relative flex flex-col justify-center bg-titan-white-500 p-3 hover:bg-dark-gold-400"
>
	<MailIcon class=" group-hover:stroke-titan-white-500" />
	<div
		class="
		fixed
		bottom-12
		left-0
		right-0
		z-10
		hidden
		flex-col
		bg-titan-white-500
		group-hover:flex
		md:bottom-auto
		md:left-12
		md:right-auto
		"
	>
		<a
			class="group/item relative flex border-l-4 border-dark-gold-400 p-5 hover:text-titan-white-500"
			target="_blank"
			href="https://github.com/HazemSayad"
		>
			<div
				class="absolute bottom-0 left-0 top-0 -z-10 h-full w-0 bg-dark-gold-400 transition-all group-hover/item:w-full"
			></div>
			<GithubIcon class="mr-5 group-hover/item:stroke-titan-white-500" />GitHub</a
		>
		<a
			class="group/item relative flex border-l-4 border-dark-gold-400 p-5 hover:text-titan-white-500"
			target="_blank"
			href="https://www.linkedin.com/in/hazemsayad"
			><div
				class="absolute bottom-0 left-0 top-0 -z-10 h-full w-0 bg-dark-gold-400 transition-all group-hover/item:w-full"
			></div>
			<LinkedinIcon class="mr-5 group-hover/item:stroke-titan-white-500" />LinkedIn</a
		>
		<a
			class="group/item relative flex border-l-4 border-dark-gold-400 p-5 hover:text-titan-white-500"
			target="_blank"
			href="mailto:hazemsayad@gmail.com"
			><div
				class="absolute bottom-0 left-0 top-0 -z-10 h-full w-0 bg-dark-gold-400 transition-all group-hover/item:w-full"
			></div>
			<AtSignIcon class="mr-5 group-hover/item:stroke-titan-white-500" />Email</a
		>
	</div>
</li>
