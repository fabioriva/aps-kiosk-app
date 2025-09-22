<script>
	import Alert from '$lib/Alert.svelte';
	import Key from '$lib/Key.svelte';
	let pin = $state('');
	const handlePress = async (key) => {
		// console.log(key);
		pin += key;
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
		<Key key={'1'} press={handlePress} />
		<Key key={'2'} press={handlePress} />
		<Key key={'3'} press={handlePress} />
		<Key key={'C'} press={handlePress} />
		<Key key={'4'} press={handlePress} />
		<Key key={'5'} press={handlePress} />
		<Key key={'6'} press={handlePress} />
		<Key key={'D'} press={handlePress} />
		<Key key={'7'} press={handlePress} />
		<Key key={'8'} press={handlePress} />
		<Key key={'9'} press={handlePress} />
		<Key key={'E'} press={handlePress} />
		<Key key={'A'} press={handlePress} />
		<Key key={'0'} press={handlePress} />
		<Key key={'B'} press={handlePress} />
		<Key key={'F'} press={handlePress} />
	</div>
</div>
