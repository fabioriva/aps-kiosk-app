<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Error from '$lib/Error.svelte';
	import Success from '$lib/Success.svelte';

	const comm = getContext('comm');
	const page = getContext('page');
	$inspect(comm);
	$inspect(page);
</script>

<div>
	{#if comm.status}
		{#if page.nr === 1}
			<div class="space-y-6">
				<Alert message="Swipe tag to start" role="info" title="Action required" />
				<img src="rfid-01.png" alt="rfid tag" class="mx-auto" width="640" height="640" />
			</div>
		{/if}
	{:else}
		<Error message="KIOSK offline" />
	{/if}
</div>
