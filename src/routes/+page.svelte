<script>
	import { getContext } from 'svelte';
	import Alert from '$lib/Alert.svelte';
	import Close from '$lib/Close.svelte';
	import Error from '$lib/Error.svelte';
	import Keypad from '$lib/Keypad.svelte';
	import Success from '$lib/Success.svelte';
	import { t, locale, locales } from '$lib/i18n';
	const comm = getContext('comm');
	$inspect(comm);
	const lang = getContext('lang');
	$inspect(lang);
	const page = getContext('page');
	$inspect(page);
	const mesg = getContext('mesg');
	$inspect(mesg);
</script>

<span class="invisible">{($locale = lang.nr > 0 && lang.nr <= locales.length ? locales[lang.nr - 1] : 'en')}</span>
{#if comm.status}
	{#if page.nr === 1}
		<Alert message={$t('swipe.mesg')} role="info" title={$t('title.action')} />
		<div class="h-[443px] flex items-center justify-center">
			<img src="rfid-01.png" alt="rfid tag" />
		</div>
	{:else if page.nr === 2}
		<Close />
	{:else if page.nr === 3}
		<Keypad />
	{:else if page.nr === 4}
		<Error message={$t(`error.mesg.${Number(mesg.error)}`)} />
	{:else if page.nr === 5}
		<Success message={$t(`success.mesg.${Number(mesg.success)}`)} />
	{/if}
{:else}
	<Error message="kiosk offline" />
{/if}
