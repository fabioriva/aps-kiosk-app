<script lang="ts">
	let { message, role, title } = $props();
	function setColor(role: string) {
		switch (role) {
			case 'error':
				return 'bg-red-100 border-red-700 text-red-700';
			case 'info':
				return 'bg-sky-100 border-sky-700 text-sky-700';
			case 'success':
				return 'bg-green-100 border-green-700 text-green-700';
			case 'warning':
				return 'bg-yellow-100 border-yellow-700 text-yellow-700';
		}
	}
	function setFontSize(message: string) {
		if(message.length <= 36) {
			return "text-3xl"
		} else {
			return "text-3xl"
		}
	}
</script>

<!-- Note: string interpolation is not working for Tailwind -->
<!-- class={`bg-${color}-100 border-t-4 border-${color}-700 text-${color}-700 rounded-b px-4 py-3 shadow-md`} -->

<div class="{setColor(role)} border-t-4 rounded-xl mx-6 px-6 py-3 shadow-md" role="alert">
	<p class="capitalize font-bold text-xl">{title}</p>
	<p class="leading-tight py-4 {setFontSize(message)} uppercase">{@html message}</p>
</div>