<script>
	import Alert from '$lib/Alert.svelte';
	let { message } = $props();
</script>

<div class="space-y-32">
	<Alert {message} role="success" title="Success" />
	<img src="success-160.png" alt="success" class="mx-auto" width="256" height="256" />
</div>