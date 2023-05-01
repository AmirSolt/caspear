
import type { Writable } from "svelte/store"
import { writable } from "svelte/store"


// Both are for brands

export let bookmarks:Writable<string[]> = writable<string[]>([])

// export let recentlyViewed:Writable<string[]> = writable<string[]>([])