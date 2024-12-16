<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import HoverableListItem from '$lib/components/HoverableListItem.svelte';
	import Particles from '$lib/components/Particles.svelte';
</script>

<Particles className="absolute inset-0 -z-50 overflow-hidden" refresh={true} />
<ContentContainer pageHeaderLabel={'Useful'}>
	<Card id="programming" title="Programming">
		<ul>
			<HoverableListItem>https://github.com/avelino/awesome-go</HoverableListItem>
			<HoverableListItem>https://github.com/golang-standards/project-layout</HoverableListItem>
			<HoverableListItem>https://goplay.tools</HoverableListItem>
			<HoverableListItem>https://fullstackopen.com/en</HoverableListItem>
			<HoverableListItem>https://devdocs.io</HoverableListItem>
			<HoverableListItem>https://regexr.com</HoverableListItem>
		</ul>
	</Card>
	<Card id="design" title="Design">
		<ul>
			<HoverableListItem>https://goodui.org</HoverableListItem>
			<HoverableListItem>https://www.awwwards.com</HoverableListItem>
			<HoverableListItem>https://realtimecolors.com</HoverableListItem>
			<HoverableListItem>https://feathericons.com</HoverableListItem>
			<HoverableListItem>https://icons.pqoqubbw.dev</HoverableListItem>
			<HoverableListItem>https://www.useronboard.com</HoverableListItem>
		</ul>
	</Card>
	<Card id="web" title="Web">
		<ul>
			<HoverableListItem>https://flexboxsheet.com</HoverableListItem>
			<HoverableListItem>https://flukeout.github.io</HoverableListItem>
			<HoverableListItem>https://realtimecolors.com</HoverableListItem>
		</ul>
	</Card>
	<Card id="flutter" title="Flutter">
		<ul>
			<HoverableListItem>https://fluttergems.dev</HoverableListItem>
			<HoverableListItem>https://github.com/Solido/awesome-flutter</HoverableListItem>
			<HoverableListItem>https://flutter.github.io/samples/web/material_3_demo</HoverableListItem>
		</ul>
	</Card>
	<Card id="sql" title="SQL">
		<ul>
			<HoverableListItem>https://mystery.knightlab.com</HoverableListItem>
			<HoverableListItem>https://selectstarsql.com</HoverableListItem>
			<HoverableListItem>https://mode.com/sql-tutorial</HoverableListItem>
		</ul>
	</Card>
	<Card id="diagnostics" title="Diagnostics">
		<ul>
			<HoverableListItem>https://www.ocbase.com</HoverableListItem>
			<HoverableListItem>https://www.cpuid.com/softwares/cpu-z.html</HoverableListItem>
		</ul>
	</Card>
</ContentContainer>
