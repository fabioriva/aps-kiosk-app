<script lang="ts">
  import type { PageProps } from "./$types";

  let { data, form }: PageProps = $props();
</script>

<div class="flex flex-col gap-10 items-center text-3xl">
  <h2 class="font-bold">Configure Network Interface</h2>

  <form method="POST" class="space-y-6 min-w-lg">
    <!-- <div>
    <label class="block font-medium">Interface</label>
    <select name="iface" class="border p-2 rounded w-full">
      <option value="eth0">eth0</option>
      <option value="wlan0">wlan0</option>
    </select>
  </div>

  <div>
    <label class="block font-medium">Mode</label>
    <select name="mode" class="border p-2 rounded w-full">
      <option value="dhcp">DHCP</option>
      <option value="static">Static</option>
    </select>
  </div> -->

    <div>
      <label class="block font-medium" for="ip">IP Address</label>
      <input
        name="ip"
        class="border p-2 rounded w-full"
        placeholder="192.168.1.50"
      />
    </div>

    <div>
      <label class="block font-medium" for="mask">Netmask (CIDR)</label>
      <input name="mask" class="border p-2 rounded w-full" placeholder="24" />
    </div>

    <div>
      <label class="block font-medium" for="gateway">Gateway</label>
      <input
        name="gateway"
        class="border p-2 rounded w-full"
        placeholder="192.168.1.1"
      />
    </div>

    <div>
      <label class="block font-medium" for="dns">DNS (space separated)</label>
      <input
        name="dns"
        class="border p-2 rounded w-full"
        placeholder="1.1.1.1 8.8.8.8"
      />
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded w-full">
      Apply
    </button>
    {#if form?.error}
      <!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
      <p class="text-center">Error, something went wrong!</p>
    {/if}
  </form>

  <a href="/">Back</a>
  <!-- <a href="/picamera">Picamera</a> -->
</div>
