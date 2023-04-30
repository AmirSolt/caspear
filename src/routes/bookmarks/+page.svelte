<script>
    
	import {events} from '$lib/data/events';
    import {bookmarks} from '$app/stores';
    
    import Card from '$lib/components/cards/Card.svelte';

</script>



{#each bookmarks as bookmark }

    <Card item={bookmark} />

{/each}

