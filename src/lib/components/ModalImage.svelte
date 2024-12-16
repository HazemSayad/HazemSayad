<script lang="ts">
	type Props = {
		imageSrc: string;
		imageAlt: string;
	};

	let { imageSrc, imageAlt }: Props = $props();
	let isModalOpen = $state(false);
</script>

<button
	aria-label="modal image"
	onclick={() => (isModalOpen = true)}
	style="background: no-repeat center / cover url({imageSrc});"
	class="h-full w-full cursor-pointer rounded-md bg-black-950"
></button>
<div
	class="blurin fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black-950/90 p-10"
	style="display: {isModalOpen ? 'block' : 'none'};"
>
	<button onclick={() => (isModalOpen = false)} class="close">&times;</button>

	<div class="m-auto flex h-full flex-col">
		<div class="flex-1">
			<div
				style="background: no-repeat center / contain url({imageSrc});"
				class="blurin delayed h-full w-full opacity-0"
			></div>
		</div>
		<div class="p-2 text-center">{imageAlt}</div>
	</div>
</div>

<style>
	.blurin {
		animation: blurin forwards;
		animation-duration: 450ms;
	}

	.delayed {
		animation-delay: 250ms;
	}

	@keyframes blurin {
		from {
			opacity: 0;
			filter: blur(10px);
		}
		to {
			filter: blur(0px);
			opacity: 1;
		}
	}

	/* The Close Button */
	.close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}
</style>
