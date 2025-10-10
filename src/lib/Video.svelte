<script>
	import { getContext } from 'svelte';
	const page = getContext('page');
	// $inspect(page);
	const VIDEO_SRC = 'aps.mp4';
</script>

<!-- <video autoplay loop muted src={VIDEO_SRC} class="px-0" id="kiosk-video"></video> -->
{#if page.nr === 0}
	<video
		autoplay
		loop
		muted
		src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
		class="px-0"
		id="kiosk-video"
	></video>
{:else}
	<!-- <video autoplay loop muted src="aps.mp4" class="px-0" id="kiosk-video"></video> -->
	<video autoplay loop muted src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4" class="px-0" id="kiosk-video"></video>
{/if}
