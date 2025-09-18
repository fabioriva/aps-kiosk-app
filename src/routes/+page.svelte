<script>
  import { getContext } from 'svelte';
  import Error from '$lib/Error.svelte';
  import Success from '$lib/Success.svelte';

	const comm = getContext('comm');
	const page = getContext('page');
	$inspect(comm);
	$inspect(page);
</script>

<div>
	{#if comm.status}
		<Success message="KIOSK online" />
	{:else}
		<Error message="KIOSK offline" />
	{/if}
</div>
