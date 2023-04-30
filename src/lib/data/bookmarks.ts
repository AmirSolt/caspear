
import type { Writable } from "svelte/store"
import { writable } from "svelte/store"


export let bookmarks:Writable<string[]> = writable<string[]>([])