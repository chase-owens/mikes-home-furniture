import { writable } from 'svelte/store';

import type { Product } from '$lib/data/products';

export const productsStore = writable<Product[]>([]);
