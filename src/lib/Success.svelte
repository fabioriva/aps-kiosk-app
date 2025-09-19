<script>
	import Alert from '$lib/Alert.svelte';
	let { message } = $props();
</script>

<Alert {message} role="success" title="Success" />
<div class="h-[443px] flex items-center justify-center">
	<img src="success-160.png" alt="success" class="mx-auto" width="256" height="256" />
</div>
