<script lang="ts">
  let { key, press, release } = $props();
  let letter = "bg-blue-500 active:bg-blue-700";
  let number = "bg-neutral-100 active:bg-neutral-300";
</script>

<button
  class={`p-6 font-semibold text-6xl text-black border-6 border-double rounded-xl ${isNaN(key) ? letter : number}`}
  onmousedown={() => press(key)}
  onmouseup={() => release(key)}>{key}</button
>
