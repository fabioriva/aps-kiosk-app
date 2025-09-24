<script>
	import Alert from '$lib/Alert.svelte';
	import { t } from '$lib/i18n';
	let { message } = $props();
</script>

<Alert {message} role="error" title={$t('error.title')} />
<div class="h-[443px] flex items-center justify-center">
	<img src="error-160.png" alt="error" class="mx-auto" width="256" height="256" />
</div>
