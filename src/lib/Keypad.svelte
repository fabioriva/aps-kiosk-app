<script lang="ts">
  import { m } from "./paraglide/messages.js";
  import Key from "$lib/Key.svelte";
  let pin = $state("");
  const handlePress = async (key: string) => {
    await fetch("/api/key/1" + key);
    if (pin.length < 3) {
      pin += key;
    } else {
      pin = "";
    }
  };
  const handleRelease = async (key: string) => {
    await fetch("/api/key/0" + key);
  };
</script>

<div class="flex flex-col gap-12 items-center text-center">
  <h1 class="font-bold text-6xl tracking-tighter uppercase bg-red-700 py-6">
    {m.enter_pin()}
  </h1>
  <h2 class="font-bold text-6xl tracking-tighter uppercase">
    {pin ? pin.replace(/\d(?!$)/g, "•") : "•••"}
  </h2>
  <div class="grid grid-cols-4 gap-1.5 align-center">
    <Key key={"1"} press={handlePress} release={handleRelease} />
    <Key key={"2"} press={handlePress} release={handleRelease} />
    <Key key={"3"} press={handlePress} release={handleRelease} />
    <Key key={"C"} press={handlePress} release={handleRelease} />
    <Key key={"4"} press={handlePress} release={handleRelease} />
    <Key key={"5"} press={handlePress} release={handleRelease} />
    <Key key={"6"} press={handlePress} release={handleRelease} />
    <Key key={"D"} press={handlePress} release={handleRelease} />
    <Key key={"7"} press={handlePress} release={handleRelease} />
    <Key key={"8"} press={handlePress} release={handleRelease} />
    <Key key={"9"} press={handlePress} release={handleRelease} />
    <Key key={"E"} press={handlePress} release={handleRelease} />
    <Key key={"A"} press={handlePress} release={handleRelease} />
    <Key key={"0"} press={handlePress} release={handleRelease} />
    <Key key={"B"} press={handlePress} release={handleRelease} />
    <Key key={"F"} press={handlePress} release={handleRelease} />
  </div>
</div>
