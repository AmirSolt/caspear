<script lang="ts">
	// export let data;
	// let mainData = data.mainData;

	import BrandCard from '$lib/components/cards/BrandCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import ContentRadio from '$lib/components/explore/ContentRadio.svelte';
	import CategorySelect from '$lib/components/explore/CategorySelect.svelte';
	import Sortby from '$lib/components/explore/Sortby.svelte';

	let contentRadio: number  = 0;



	import { categories, getBrandsByCategoryId, getEventsByCategoryId } from '$lib/data/marketData';

	let chosenCategoryId: string = categories[0].id;
	$: brands = getBrandsByCategoryId(chosenCategoryId);
	$: events = getEventsByCategoryId(chosenCategoryId);

</script>

<h1>{["Brands", "Events"][contentRadio]}</h1>

<CategorySelect bind:chosenCategoryId categories={categories} />


<ContentRadio bind:contentRadio />
<Sortby />

{#if contentRadio==0}
	{#each brands as brand}
		<BrandCard {brand} />
	{/each}
{/if}

{#if contentRadio==1}
	{#each events as event}
		<EventCard {event} />
	{/each}
{/if}
