<script lang="ts">
    import type {Brand} from '$lib/data/marketData';
	import { Bookmark } from 'lucide-svelte';
	import {bookmarks} from '../../../stores/userActivity';

	export let brand: Brand;

	$: isBrandBookmarked = $bookmarks.includes(brand.id);


	function updateBookmarks() {
		if (!$bookmarks.includes(brand.id)) {
			$bookmarks.push(brand.id); //adding to array because value doesnt exists
		} else {
			$bookmarks.splice($bookmarks.indexOf(brand.id), 1); //deleting
		}
		console.log($bookmarks)
		isBrandBookmarked = $bookmarks.includes(brand.id);
	}


	
</script>

<button  on:click={updateBookmarks}>
	{#if isBrandBookmarked}
		<Bookmark fill="#FFFF00" />
	{:else}
		<Bookmark />
	{/if}
</button>
