import { writable } from 'svelte/store';

import type { Product } from '$lib/models/products';

export const productsStore = writable<Product[]>([]);
