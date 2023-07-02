<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';
</script>

{#key $page.url}
	<div in:fly={{ y: -50, duration: 500 }}><slot /></div>
{/key}
