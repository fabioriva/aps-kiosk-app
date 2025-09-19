<script>
	import Alert from '$lib/Alert.svelte';
	let { message } = $props();
</script>

<Alert {message} role="error" title="Error" />
<div class="h-[443px] flex items-center justify-center">
	<img src="error-160.png" alt="error" class="mx-auto" width="256" height="256" />
</div>
