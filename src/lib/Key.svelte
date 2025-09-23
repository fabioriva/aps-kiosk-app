<script>
	let { key, press, release } = $props();
</script>

<button
	class="{!isNaN(key)
		? 'text-gray-700 border-gray-800 bg-gray-50 active:bg-gray-500'
		: 'text-blue-700 border-blue-700 bg-blue-300 active:bg-blue-500'}
    h-24 w-24 align-middle font-semibold text-6xl border-4 border-double rounded-lg cursor-pointer"
	onmousedown={() => press(key)}
	onmouseup={() => release(key)}>{key}</button
>
