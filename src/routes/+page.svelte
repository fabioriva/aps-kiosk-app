<script lang="ts">
  import AskAndAnswer from "$lib/AskAndAnswer.svelte";
  import Close from "$lib/CloseButton.svelte";
  import Error from "$lib/Error.svelte";
  import Keypad from "$lib/Keypad.svelte";
  import Success from "$lib/Success.svelte";
  import Tag from "$lib/SwipeTag.svelte";
  import { locales, setLocale } from "$lib/paraglide/runtime";
  import { getWSContext } from "$lib/ws-context";

  const ws = getWSContext();
  // $inspect(ws);

  const lang = $derived(locales[ws.message?.lang]);
  $effect(() => {
    if (!lang) return;
    setLocale(lang);
  });
</script>

<!-- <button onclick={() => setLocale(ws.message?.lang)}>{lang}</button> -->

{#if !ws.message?.comm}
  <video autoplay loop muted src="sotefin.mp4"></video>
  <!-- {:else if ws.message?.page === 1}
  <Tag /> -->
{:else if ws.message?.page === 2}
  <Close />
{:else if ws.message?.page === 3}
  <Keypad />
{:else if ws.message?.page === 4}
  <Error />
{:else if ws.message?.page === 5}
  <Success />
{:else if ws.message?.page === 7}
  <AskAndAnswer />
{:else}
  <!-- <video autoplay loop muted src="sotefin.mp4"></video> -->
  <Tag />
{/if}
