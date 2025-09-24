<script>
	import Alert from '$lib/Alert.svelte';
	import { t } from '$lib/i18n';
	let { message } = $props();
</script>

<Alert {message} role="success" title={$t('success.title')} />
<div class="h-[443px] flex items-center justify-center">
	<img src="success-160.png" alt="success" class="mx-auto" width="256" height="256" />
</div>
