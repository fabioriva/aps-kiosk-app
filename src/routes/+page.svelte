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
			<Alert message="Swipe tag to start" role="info" title="Action required" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="256"
				height="256"
				fill="#0369a1"
				class="bi bi-arrow-down-square-fill mx-auto mt-16"
				viewBox="0 0 16 16"
			>
				<path
					d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"
				/>
			</svg>
		{/if}
	{:else}
		<Error message="KIOSK offline" />
	{/if}
</div>
