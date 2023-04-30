<script lang="ts">

	import {events} from '$lib/server/events';

	import Card from '$lib/components/cards/Card.svelte';
	import BrandSelect from '$lib/components/other/BrandSelect.svelte';


	let categories:string[] = Object.keys(events);
	let chosenCategoryIndex:number = 0;

	console.log('categories', categories);

</script>


<BrandSelect bind:chosenCategoryIndex categories={categories} />

{#each events[categories[chosenCategoryIndex]].items  as item}
	<Card item={item} />
{/each}


