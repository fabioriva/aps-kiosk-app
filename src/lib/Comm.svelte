<script>
	let { status } = $props();
	let online = 'ONLINE';
	let offline = 'OFFLINE';
	$inspect(status);
</script>

<!-- <div
	class={`rounded-lg ${status ? 'bg-green-700' : 'bg-red-700'} font-sans text-white py-1 w-32`}
>
	<span class="font-semibold">{status ? online : offline}</span>
</div> -->

<div
	class={`${status ? 'text-green-500' : 'text-red-500'} font-sans py-1 w-32`}
>
	<span class="font-semibold">{status ? online : offline}</span>
</div>