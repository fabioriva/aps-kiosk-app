<script lang="ts">
	import { onMount } from 'svelte';

	let dayOrNight = $state('AM');
	let time = $state(new Date());
	// these automatically update when `time`
	// changes, because of the `$:` prefix
	let hour = $derived(time.getHours());
	let min = $derived(time.getMinutes());
	let sec = $derived(time.getSeconds());
	function addZero(value: number) {
		const s = value.toString();
		// console.log(typeof value, value, typeof s, s.length);
		return s.length < 2 ? '0' + s : s;
	}
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

<div class="clockWrapper py-1 w-32 bg-white rounded-lg">
	<p class="clockDisplay">
		{hour <= 12 ? addZero(hour) : addZero(hour - 12)}:{addZero(min)}:{addZero(sec)}
		{dayOrNight}
	</p>
</div>
