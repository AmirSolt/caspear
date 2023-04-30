<script lang="ts">
	import { Bookmark } from 'lucide-svelte'

    export let brandName:string;
    let bookmarks:string[]; // << this should be a global variable


    let isBrandBookmarked:boolean = brandName in bookmarks;

    function updateBookmarks(){
        if(brandName in bookmarks){
            bookmarks = bookmarks.filter((bookmark) => bookmark != brandName);
        }else{
            // append brand to bookmarks
            bookmarks.push(brandName);
        }
        isBrandBookmarked = !isBrandBookmarked;
    }

</script>




<button on:click={updateBookmarks}>
    {#if isBrandBookmarked}
        <Bookmark color="#FFFF00" />
    {:else}
        <Bookmark  />
    {/if}
</button>