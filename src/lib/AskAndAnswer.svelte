<script lang="ts">
  import { m } from "./paraglide/messages";

  let count = $state(1);
  // $inspect(count);

  const cancel_p = async () => {
    await fetch("/api/ask_and_answer/cancel/1");
  };
  const cancel_r = async () => {
    await fetch("/api/ask_and_answer/cancel/0");
  };
  const confirm_p = async () => {
    await fetch("/api/ask_and_answer/confirm/1");
  };
  const confirm_r = async () => {
    await fetch("/api/ask_and_answer/confirm/0");
  };
</script>

{#if count < 4}
  <div class="space-y-24 font-semibold text-6xl text-center">
    <h1 class="font-bold tracking-tighter uppercase bg-red-700 py-6">
      {m.answer()}
    </h1>
    <div class="flex flex-col gap-20 items-center">
      <h2 class="tracking-tighter">
        {m[`question.${count}`]()}?
      </h2>
      <div class="flex gap-12">
        <button
          type="button"
          class="py-6 rounded-lg w-64
         bg-gradient-to-b from-red-300 via-red-700 to-red-700
         active:from-red-400 active:via-red-600 active:to-red-800
         shadow-md active:shadow-inner
         transition-all duration-150"
          // onclick={() => (value = "no")}
          onmousedown={cancel_p}
          onmouseup={cancel_r}
        >
          {m.answer_no()}
        </button>

        <button
          type="button"
          class="py-6 rounded-lg w-64
         bg-gradient-to-b from-green-300 via-green-700 to-green-700
         active:from-green-400 active:via-green-600 active:to-green-800
         shadow-md active:shadow-inner
         transition-all duration-150"
          onclick={() => count++}
          onmousedown={confirm_p}
          onmouseup={confirm_r}
        >
          {m.answer_yes()}
        </button>
      </div>
    </div>
  </div>
{/if}
