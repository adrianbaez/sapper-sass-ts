import { writable, Writable } from 'svelte/store';
import type { IPage } from './services/page';

export const currentPage: Writable<IPage|null> = writable(null);