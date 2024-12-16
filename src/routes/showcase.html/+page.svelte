<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import ModalImage from '$lib/components/ModalImage.svelte';
	import Particles from '$lib/components/Particles.svelte';
	const diplomaImg = [
		{
			src: 'img/bsme.jpeg',
			alt: 'bsme'
		}
	];

	const laptopImg = [
		{
			src: 'img/photo_2021-04-03_08-45-24.jpg',
			alt: 'laptop thermal mod 1'
		},
		{
			src: 'img/photo_2021-04-03_08-48-47.jpg',
			alt: 'laptop thermal mod 2'
		},
		{
			src: 'img/photo_2022-02-16_22-44-12.jpg',
			alt: 'laptop thermal mod 3'
		}
	];
</script>

<Particles className="absolute inset-0 -z-50 overflow-hidden" refresh={true} />
<ContentContainer pageHeaderLabel={'Showcase'}>
	<Card id="diploma" title="Diploma">
		<div class="aspect-video w-full">
			<ModalImage
				imageSrc="img/bsme.jpeg"
				imageAlt="Bachelor of Science in Mechanical Engineering Diploma"
			/>
		</div>
	</Card>
	<Card id="laptop" title="Laptop" expand>
		<div class="flex h-full flex-col">
			<div class="h-full w-full flex-1 py-2">
				<ModalImage imageSrc="img/photo_2021-04-03_08-45-24.jpg" imageAlt="Laptop Thermal Mod 1" />
			</div>
			<div class="h-full w-full flex-1 py-2">
				<ModalImage imageSrc="img/photo_2021-04-03_08-48-47.jpg" imageAlt="Laptop Thermal Mod 2" />
			</div>
			<div class="h-full w-full flex-1 py-2">
				<ModalImage imageSrc="img/photo_2022-02-16_22-44-12.jpg" imageAlt="Laptop Thermal Mod 3" />
			</div>
		</div>
	</Card>
</ContentContainer>
