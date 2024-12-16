<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-full flex-auto flex-col-reverse overflow-hidden md:flex-row">
	<NavBar />
	{@render children()}
</div>
