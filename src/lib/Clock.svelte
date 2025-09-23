<script>
	import { onMount } from 'svelte';

	let dayOrNight = $state('AM');
	let time = $state(new Date());
	// these automatically update when `time`
	// changes, because of the `$:` prefix
	let hour = $derived(time.getHours());
	let min = $derived(time.getMinutes());
	let sec = $derived(time.getSeconds());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="clockWrapper py-1 w-28 bg-white rounded-lg">
	<p class="clockDisplay font-semibold">
		{hour <= 12 ? hour : hour - 12}:{min}:{sec}
		{dayOrNight}
	</p>
</div>
