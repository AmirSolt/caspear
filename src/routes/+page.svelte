<script lang="ts">
	// export let data;
	// let mainData = data.mainData;

	import BrandCard from '$lib/components/cards/BrandCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import CategorySelect from '$lib/components/explore/CategorySelect.svelte';
	import Sortby from '$lib/components/explore/Sortby.svelte';
	import ContentTabs from '$lib/components/explore/ContentTabs.svelte';
	import BrandFilter from '$lib/components/explore/BrandFilter.svelte';

    const contentTabs:string[] = ["Brands", "Events"];
    let chosenContentTab:string = contentTabs[0];



	import { categories, getBrandsByCategoryId, getEventsByCategoryId } from '$lib/data/marketData';
	let chosenCategoryId: string = categories[0].id;
	$: brands = getBrandsByCategoryId(chosenCategoryId);
	$: events = getEventsByCategoryId(chosenCategoryId);


</script>


<ContentTabs bind:chosenContentTab  contentTabs={contentTabs}/>


<h1>{chosenContentTab}</h1>

<CategorySelect bind:chosenCategoryId categories={categories} />


<BrandFilter />
<Sortby />

{#if chosenContentTab=="Brands"}
	{#each brands as brand}
		<BrandCard {brand} />
	{/each}
{/if}

{#if chosenContentTab=="Events"}
	{#each events as event}
		<EventCard {event} />
	{/each}
{/if}
