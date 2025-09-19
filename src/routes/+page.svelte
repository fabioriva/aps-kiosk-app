<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Close from '$lib/Close.svelte';
	import Error from '$lib/Error.svelte';
	import Success from '$lib/Success.svelte';

	const comm = getContext('comm');
	const page = getContext('page');
	$inspect(comm);
	$inspect(page);
</script>

{#if comm.status}
	{#if page.nr === 1}
		<Alert message="Swipe tag to start" role="info" title="Action required" />
		<div class="h-[443px] flex items-center justify-center bg-green-100">
			<img src="rfid-01.png" alt="rfid tag" />
		</div>

		<!-- <div class="flex flex-col items-center bg-lime-100">
				<Alert message="Swipe tag to start" role="info" title="Action required" />
				<img src="rfid-01.png" alt="rfid tag" class="mx-auto" />
			</div> -->
	{:else if page.nr === 2}
		<Close />
	{/if}
{:else}
	<Error message="kiosk offline" />
{/if}
