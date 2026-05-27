<script lang="ts">
	import backArrow from '$lib/assets/icons/back-arrow.svg';
	import { useBackNavigation } from '$lib/hooks/useBackNavigation';
	import { getBackLabel } from '$lib/utils/getBackLabel';

	const { backTarget, goBack } = useBackNavigation();
	const backLabel = $derived(getBackLabel($backTarget));
</script>

<button
	onclick={goBack}
	class="text-primary mb-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium hover:underline"
	type="button"
>
	<img src={backArrow} alt="Back" class="h-4 w-4" />
	{backLabel}
</button>
