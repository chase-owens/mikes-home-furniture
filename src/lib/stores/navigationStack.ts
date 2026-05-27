import { get, writable } from 'svelte/store';

import { browser } from '$app/environment';

const STORAGE_KEY = 'navigationStack';

function createNavigationStack() {
	const initialValue = browser ? JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]') : [];

	const { subscribe, set, update } = writable<string[]>(initialValue);

	subscribe((value) => {
		if (browser) {
			sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
		}
	});

	return {
		subscribe,
		push: (path: string) => update((stack) => (stack.at(-1) === path ? stack : [...stack, path])),
		backTarget: () => {
			const stack = get({ subscribe });
			return stack.at(-2) ?? '/';
		},
		pop: () =>
			update((stack) => {
				return stack.length > 1 ? [...stack.slice(0, -1)] : stack;
			}),
		clear: () => set([])
	};
}

export const navigationStack = createNavigationStack();
