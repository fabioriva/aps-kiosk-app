<script>
	let { status } = $props();
	let online = 'ONLINE';
	let offline = 'OFFLINE';
	$inspect(status);
</script>

<div
	class={`rounded-lg ${status ? 'bg-green-600' : 'bg-red-600'} font-sans text-white py-1 w-32`}
>
	<span class="font-semibold">{status ? online : offline}</span>
</div>