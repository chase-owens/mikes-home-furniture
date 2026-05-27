<script lang="ts">
	import CtaCardModule from './CtaCardModule.svelte';

	const { modules } = $props();
</script>

<div class="grid sm:gap-8 lg:grid-cols-2">
	<CtaCardModule {...modules[0]} /><CtaCardModule {...modules[1]} />
</div>
