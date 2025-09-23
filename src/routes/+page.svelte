<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Close from '$lib/Close.svelte';
	import Error from '$lib/Error.svelte';
	import Keypad from '$lib/Keypad.svelte';
	import Success from '$lib/Success.svelte';
	import { error } from '@sveltejs/kit';

	const comm = getContext('comm');
	const mesg = getContext('mesg');
	const page = getContext('page');
	$inspect(comm);
	$inspect(mesg);
	$inspect(page);
	console.log(mesg)
</script>

{#if comm.status}
	{#if page.nr === 1}
		<Alert message="Swipe tag to start" role="info" title="Action required" />
		<div class="h-[443px] flex items-center justify-center">
			<img src="rfid-01.png" alt="rfid tag" />
		</div>

		<!-- <div class="flex flex-col items-center bg-lime-100">
				<Alert message="Swipe tag to start" role="info" title="Action required" />
				<img src="rfid-01.png" alt="rfid tag" class="mx-auto" />
			</div> -->
	{:else if page.nr === 2}
		<Close />
	{:else if page.nr === 3}
		<Keypad />
	{:else if page.nr === 4}
		<Error message={`message ${mesg.error.toString()}`} />
	{:else if page.nr === 5}
		<Success message={`message ${mesg.success.toString()}`}/>
	{/if}
{:else}
	<Error message="kiosk offline" />
{/if}
