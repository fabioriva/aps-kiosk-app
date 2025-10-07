<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import { t } from '$lib/i18n';
	const mesg = getContext('mesg');
	$inspect(mesg);
	console.log(typeof mesg.close, mesg.close);

	// const messages = [
	// 	'press and hold the button to close',
	// 	'gate closed',
	// 	'press button to close',
	// 	'gate closing',
	// 	'gate opening'
	// ];
	let isPressed = $state(false);
	const push = async () => {
		isPressed = true;
		await fetch('/api/close/1');
	};
	const release = async () => {
		isPressed = false;
		await fetch('/api/close/0');
	};
</script>

<!-- <Alert message={messages[mesg.close]} role="warning" title={$t("title.action")} /> -->
<Alert message={$t(`close.mesg.${Number(mesg.close)}`)} role="warning" title={$t('title.action')} />
<div class="h-[443px] flex items-center justify-center">
	<button
		class={`w-[256px] h-[256px] cursor-pointer rounded-full bg-yellow-500 border-4 border-yellow-600 opacity-100 shadow-2xl shadow-slate-700 font-bold text-2xl text-amber-700 uppercase ${isPressed && 'bg-gradient-to-br from-amber-500 to-amber-600 text-amber-600'}`}
		onmousedown={push}
		onmouseup={release}>{$t('close.button')}</button
	>
</div>
