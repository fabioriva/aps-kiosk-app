<script>
	import Alert from '$lib/Alert.svelte';
	import Key from '$lib/Key.svelte';
	let pin = $state('');
	const handlePress = async (e) => {
		pin += e.detail.key;
		if (pin.length >= 3) {
			const url = `/api/pin?pin=${pin}`;
			pin = '';
			const res = await fetch(url);
			const json = await res.json();
			console.log(json);
			// await fetch(url).json();
		}
	};
</script>

<Alert
	message={pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter PIN code'}
	role="warning"
	title="Action required"
/>
<div class="mt-5">
	<!-- <h1>{pin ? pin.replace(/\d(?!$)/g, '•') : 'Enter PIN'}</h1> -->
	<div class="grid grid-cols-4 gap-2 align-center justify-items-center mx-auto w-[410px]">
		<Key key={'1'} on:press={handlePress} />
		<Key key={'2'} on:press={handlePress} />
		<Key key={'3'} on:press={handlePress} />
		<Key key={'C'} on:press={handlePress} />
		<Key key={'4'} on:press={handlePress} />
		<Key key={'5'} on:press={handlePress} />
		<Key key={'6'} on:press={handlePress} />
		<Key key={'D'} on:press={handlePress} />
		<Key key={'7'} on:press={handlePress} />
		<Key key={'8'} on:press={handlePress} />
		<Key key={'9'} on:press={handlePress} />
		<Key key={'E'} on:press={handlePress} />
		<Key key={'A'} on:press={handlePress} />
		<Key key={'0'} on:press={handlePress} />
		<Key key={'B'} on:press={handlePress} />
		<Key key={'F'} on:press={handlePress} />
	</div>
</div>