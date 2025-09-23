<script lang="ts">
	import Alert from '$lib/Alert.svelte';
	import Key from '$lib/Key.svelte';
	let pin = $state('');
	// const handlePress = async (key: string) => {
	// 	console.log(key);
	// 	pin += key;
	// 	if (pin.length >= 3) {
	// 		const url = `/api/pin?pin=${pin}`;
	// 		pin = '';
	// 		const res = await fetch(url);
	// 		const json = await res.json();
	// 		console.log(json);
	// 		// await fetch(url).json();
	// 	}
	// };
	const handlePress = async (key: string) => {
		console.log('Pressed key', typeof key, key);
		await fetch('/api/key/1' + key);
		pin += key;
	};
	const handleRelease = async (key: string) => {
		console.log('Released key', typeof key, key);
		await fetch('/api/key/0' + key);
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
		<Key key={'1'} press={handlePress} release={handleRelease} />
		<Key key={'2'} press={handlePress} release={handleRelease} />
		<Key key={'3'} press={handlePress} release={handleRelease} />
		<Key key={'C'} press={handlePress} release={handleRelease} />
		<Key key={'4'} press={handlePress} release={handleRelease} />
		<Key key={'5'} press={handlePress} release={handleRelease} />
		<Key key={'6'} press={handlePress} release={handleRelease} />
		<Key key={'D'} press={handlePress} release={handleRelease} />
		<Key key={'7'} press={handlePress} release={handleRelease} />
		<Key key={'8'} press={handlePress} release={handleRelease} />
		<Key key={'9'} press={handlePress} release={handleRelease} />
		<Key key={'E'} press={handlePress} release={handleRelease} />
		<Key key={'A'} press={handlePress} release={handleRelease} />
		<Key key={'0'} press={handlePress} release={handleRelease} />
		<Key key={'B'} press={handlePress} release={handleRelease} />
		<Key key={'F'} press={handlePress} release={handleRelease} />
	</div>
</div>
