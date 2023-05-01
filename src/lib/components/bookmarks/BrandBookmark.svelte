<script lang="ts">
	import { Bookmark } from 'lucide-svelte';
	import {bookmarks} from '../../../stores/userActivity';

	export let brandName: string;

	$: isBrandBookmarked = $bookmarks.includes(brandName);


	function updateBookmarks() {
		if (!$bookmarks.includes(brandName)) {
			$bookmarks.push(brandName); //adding to array because value doesnt exists
		} else {
			$bookmarks.splice($bookmarks.indexOf(brandName), 1); //deleting
		}
		console.log($bookmarks)
		isBrandBookmarked = $bookmarks.includes(brandName);
	}


	
</script>

<button  on:click={updateBookmarks}>
	{#if isBrandBookmarked}
		<Bookmark fill="#FFFF00" />
	{:else}
		<Bookmark />
	{/if}
</button>
