import { writable } from 'svelte/store';

export const slotStore = writable("head");
export const classStore = writable("");
export const specStore = writable("");
export const stats = writable({
        vers: true,
        haste: true,
        crit: true,
        mastery: true,
});