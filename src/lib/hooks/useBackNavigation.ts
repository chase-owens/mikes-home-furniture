/* eslint-disable svelte/no-navigation-without-resolve */
// $lib/hooks/useBackNavigation.ts
import { derived, get } from 'svelte/store';
import { goto } from '$app/navigation';
import { navigationStack } from '$lib/stores/navigationStack';

export function useBackNavigation() {
	const backTarget = derived(navigationStack, ($stack) => {
		return $stack[$stack.length - 2] ?? '/';
	});

	function goBack() {
		const stack = get(navigationStack);
		const target = stack[stack.length - 2] ?? '/';

		navigationStack.pop();
		goto(target);
	}

	return {
		backTarget,
		goBack
	};
}
