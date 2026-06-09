<script lang="ts">
  import { onMount } from "svelte";

  const PUBLIC_WS = "ws://localhost:8765"
  let socket: WebSocket | null = null;
  let url = $state("");
  onMount(() => {
    socket = new WebSocket(PUBLIC_WS);
    socket.onmessage = (event) => {
      const blob = new Blob([event.data], {type: "image/jpeg"})
      url = URL.createObjectURL(blob)
    };
  });
</script>

<div class="flex flex-col gap-10 items-center text-3xl">
  <h2 class="font-bold">Pi Camera</h2>
  <img id="view" src={url} alt="picamera" />
  <a href="/">Kiosk App</a>
  <a href="/ip">Network</a>
</div>