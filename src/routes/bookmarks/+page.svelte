<script lang='ts'>
    
    // export let data;
	// let mainData = data.mainData;
	import {brands} from '$lib/data/mainData';
    import {bookmarks} from '../../stores/userActivity';
    
    import BrandCard from '$lib/components/cards/BrandCard.svelte';

    let bookmarkedBrands:any[] = [];
    for(let brand of brands){
        if($bookmarks.includes(brand.name)){
            bookmarkedBrands.push(brand);
        }
    }

</script>






{#each bookmarkedBrands as brand }

    <BrandCard brand={brand} />

{/each}

