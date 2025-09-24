<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Close from '$lib/Close.svelte';
	import Error from '$lib/Error.svelte';
	import Keypad from '$lib/Keypad.svelte';
	import Success from '$lib/Success.svelte';
	import { t, locale } from '$lib/i18n';
	const comm = getContext('comm');
	const mesg = getContext('mesg');
	const page = getContext('page');
	$inspect(comm);
	$inspect(mesg);
	$inspect(page);
	// console.log(mesg)
	$locale = "it"
</script>

{#if comm.status}
	{#if page.nr === 1}
		<Alert message={$t('swipe')} role="info" title={$t("action")} />
		<div class="h-[443px] flex items-center justify-center">
			<img src="rfid-01.png" alt="rfid tag" />
		</div>

		<!-- <div class="flex flex-col items-center bg-lime-100">
				<Alert message="Swipe tag to start" role="info" title={$t("action")} />
				<img src="rfid-01.png" alt="rfid tag" class="mx-auto" />
			</div> -->
	{:else if page.nr === 2}
		<Close />
	{:else if page.nr === 3}
		<Keypad />
	{:else if page.nr === 4}
		<Error message={$t(`error.mesg.${Number(mesg.error)}`)} />
	{:else if page.nr === 5}
		<Success message={$t(`success.mesg.${Number(mesg.success)}`)}/>
	{/if}
{:else}
	<Error message="kiosk offline" />
{/if}
