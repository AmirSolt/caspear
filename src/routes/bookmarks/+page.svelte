<script>
    
	import {events} from '$lib/server/events';
    import {bookmarks} from '$app/stores';
    
    import Card from '$lib/components/cards/Card.svelte';

</script>



{#each bookmarks as bookmark }

    <Card item={bookmark} />

{/each}

