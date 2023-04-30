<script lang='ts'>
    
    // export let data;
	// let mainData = data.mainData;
	import {mainData} from '$lib/data/mainData';
    import {bookmarks} from '$lib/data/bookmarks';
    
    import BrandCard from '$lib/components/cards/BrandCard.svelte';

    // get all brands and get brand object from bookmark names

</script>



{#each $bookmarks as bookmark }

    <BrandCard brand={bookmark} />

{/each}

