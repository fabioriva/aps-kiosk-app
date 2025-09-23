<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import '../app.css';
	import { PUBLIC_WS } from '$env/static/public';
	import favicon from '$lib/assets/favicon.svg';
	import Clock from '$lib/Clock.svelte';
	import Comm from '$lib/Comm.svelte';
	import Video from '$lib/Video.svelte';

	let { children } = $props();
	let comm = $state({ status: false });
	let page = $state({ nr: 0 });
	let mesg = $state({ close: 0, error: 0, success: 0 });
	setContext('comm', comm);
	setContext('page', page);
	setContext('mesg', mesg);
	onMount(() => {
		const ws = new WebSocket(PUBLIC_WS);
		ws.onmessage = (e) => {
			const m = JSON.parse(e.data);
			// console.log(m);
			comm.status = m['comm'];
			page.nr = m['page'];
			mesg.close = m['closeMesg'];
			mesg.error = m['errorMesg'];
			mesg.success = m['successMesg'];
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-[1280px] w-[800px] bg-linear-to-br from-slate-400 to-slate-200">
	<!-- Header -->
	<div class="flex h-[64px] w-full items-center px-3 text-center text-lg">
		<div><Comm status={comm.status} /></div>
		<div class="grow font-semibold uppercase">Kiosk P{page.nr}</div>
		<div><Clock /></div>
	</div>
	<!-- Video -->
	<div class="h-[576px] flex">
		<Video />
	</div>
	<!--  UI -->
	<div class="h-[576px]">
		{@render children?.()}
	</div>
	<!-- Footer -->
	<div class="flex h-[64px] w-[800px] items-center px-3 text-center">
		<div class="grow font-normal">
			<!-- <span class="font-normal"
				>© {new Date().getFullYear()} Sotefin SA. Made with
				<span class="inline-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="rgb(239 68 68)"
						class="bi bi-heart-fill"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
						/>
					</svg>
				</span> in Switzerland.</span
			> -->
			<span>© {new Date().getFullYear()} Sotefin SA. All rights reserved.</span>
		</div>
	</div>
</div>
