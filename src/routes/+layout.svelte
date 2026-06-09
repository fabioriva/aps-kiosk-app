<script lang="ts">
  import { onMount } from "svelte";
  import type { Pathname } from "$app/types";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { getLocale, locales, localizeHref } from "$lib/paraglide/runtime";
  import { setWSContext } from "$lib/ws-context";
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { PUBLIC_WS } from "$env/static/public";

  let wsState = $state({
    connected: false,
    message: undefined,
  });
  // $inspect(wsState);

  let socket: WebSocket | null = null;

  onMount(() => {
    socket = new WebSocket(PUBLIC_WS);
    socket.onopen = () => {
      wsState.connected = true;
    };
    socket.onmessage = (event) => {
      wsState.message = JSON.parse(event.data);
    };
    socket.onclose = () => {
      wsState.connected = false;
    };
  });
  setWSContext(wsState);

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
  class="flex flex-col items-center justify-center gap-6 h-screen bg-black cursor-none text-white"
>
  <div
    class="absolute top-0 w-full h-[70px] flex items-center justify-center font-bold text-3xl tracking-tighter uppercase px-3"
  >
    <h1 class="grow-1">
      Sotefin SA <span class="bg-red-600 px-3">Aps Kiosk</span>
    </h1>
    <div class={`${wsState.message?.comm ? "text-green-700" : "text-red-600"}`}>
      <!-- {wsState.message?.lang !== undefined
        ? locales[wsState.message?.lang]
        : undefined} -->
      <span>{getLocale()}</span>
      {wsState.message?.page !== undefined
        ? "P" + wsState.message?.page
        : undefined}
      <a href="/ip">{wsState.message?.comm ? "ONLINE" : "OFFLINE"}</a>
    </div>
  </div>
  {@render children()}
</div>

<div style="display:none">
  {#each locales as locale (locale)}
    <a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
      >{locale}</a
    >
  {/each}
</div>
