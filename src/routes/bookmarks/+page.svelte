<script lang='ts'>
    
  
    import type {Brand} from '$lib/data/marketData';
	import {getBrandByIds} from '$lib/data/marketData'
    import {bookmarks} from '../../stores/userActivity';
    
    import BrandCard from '$lib/components/cards/BrandCard.svelte';


    console.log($bookmarks)

    let bookmarkedBrands:Brand[] = getBrandByIds($bookmarks);
 
    console.log(bookmarkedBrands)

</script>






{#each bookmarkedBrands as brand }

    <BrandCard brand={brand} />

{/each}

