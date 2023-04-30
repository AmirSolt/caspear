<script lang="ts">
	import { Bookmark } from 'lucide-svelte';
	import { bookmarks } from '$lib/data/bookmarks';

	export let brandName: string;

	let isBrandBookmarked:boolean = $bookmarks.includes(brandName);
    console.log(isBrandBookmarked);

	function updateBookmarks() {
		if (!$bookmarks.includes(brandName)) {
			$bookmarks.push(brandName); //adding to array because value doesnt exists
		} else {
			$bookmarks.splice($bookmarks.indexOf(brandName), 1); //deleting
		}

		isBrandBookmarked = !isBrandBookmarked;
		console.log($bookmarks);
	}
</script>

<button on:click={updateBookmarks}>
	{#if isBrandBookmarked}
		<Bookmark color="#FFFF00" />
	{:else}
		<Bookmark />
	{/if}
</button>
