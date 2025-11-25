<script lang="ts">
	let { message, role, title } = $props();
	function setColor(role: string) {
		switch (role) {
			case 'error':
				return 'bg-red-500/10 border-red-500 text-red-500';
			case 'info':
				return 'bg-blue-500/10 border-blue-500 text-blue-500';
			case 'success':
				return 'bg-green-500/10 border-green-500 text-green-500';
			case 'warning':
				return 'bg-yellow-500/10 border-yellow-500 text-yellow-500';
		}
	}
	function setFontSize(message: string) {
		if (message.length <= 36) {
			return 'text-3xl';
		} else {
			return 'text-3xl';
		}
	}
</script>

<!-- Note: string interpolation is not working for Tailwind -->
<!-- class={`bg-${color}-100 border-t-4 border-${color}-500 text-${color}-500 rounded-b px-4 py-3 shadow-md`} -->

<div class="{setColor(role)} border-4 rounded-xl px-6 py-3 text-center w-[776px]" role="alert">
	<p class="capitalize text-xl">{title}</p>
	<p class="leading-tight py-4 {setFontSize(message)} uppercase">{@html message}</p>
</div>
