<script>
	import Alert from '$lib/Alert.svelte';
	let { message } = $props();
</script>

<div class="flex flex-col items-center space-y-6">
	<Alert {message} role="error" title="Error" />
	<img src="error-160.png" alt="error" class="mx-auto" width="256" height="256" />
</div>