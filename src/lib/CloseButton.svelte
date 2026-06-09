<script lang="ts">
  import { m } from "./paraglide/messages.js";
  import { getWSContext } from "$lib/ws-context";

  const ws = getWSContext();
  // $inspect(ws);

  let isPressed = $state(false);
  $inspect(isPressed);

  const push = async () => {
    isPressed = true;
    await fetch("/api/close/1");
  };
  const release = async () => {
    isPressed = false;
    await fetch("/api/close/0");
  };
</script>

<div class="space-y-24 text-center">
  <!-- <div class="h-64 flex items-center"> -->
  <h1
    class="h-64 flex items-center font-bold text-6xl tracking-tighter uppercase bg-red-700 px-3 py-6"
  >
    {#if ws.message?.closeMesg === 1}
      <span>{m.gate_closed()}</span>
    {:else if ws.message?.closeMesg === 3}
      <span>{m.gate_closing()}</span>
    {:else if ws.message?.closeMesg === 4}
      <span>{m.gate_opening()}</span>
    {:else}
      <span>{m.push_to_close()}</span>
    {/if}
  </h1>
  <!-- </div> -->
  <button
    class="rounded-full w-64 h-64
         bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700
         active:from-yellow-400 active:via-yellow-600 active:to-yellow-800
         shadow-md active:shadow-inner
         border-8 border-silver-900
         transition-all duration-150"
    onmousedown={push}
    onmouseup={release}
  >
    <span class="font-bold text-black text-4xl uppercase">
      {isPressed ? m.pushed() : m.push()}
    </span>
  </button>
</div>
