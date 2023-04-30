<script lang="ts">
	// export let data;
	// let mainData = data.mainData;

	import { mainData } from '$lib/data/mainData';

	import BrandCard from '$lib/components/cards/BrandCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import ContentRadio from '$lib/components/explore/ContentRadio.svelte';
	import CategorySelect from '$lib/components/explore/CategorySelect.svelte';

	let contentRadio: number  = 0;

	let categories: string[] = Object.keys(mainData);
	let chosenCategoryIndex: number = 0;
	$: category = mainData[categories[chosenCategoryIndex]];
	$: brands = Object.values(category.brands);
	$: events = brands.map((brand:any) => brand.events).flat();

</script>

<h1>Brands</h1>

<CategorySelect bind:chosenCategoryIndex categories={categories} />


<ContentRadio bind:contentRadio />


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
