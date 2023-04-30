<script lang="ts">
	// export let data;
	// let mainData = data.mainData;

	import { mainData } from '$lib/data/mainData';

	import BrandCard from '$lib/components/cards/BrandCard.svelte';
	import EventCard from '$lib/components/cards/EventCard.svelte';
	import CategorySelect from '$lib/components/other/CategorySelect.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let contentRadio: number  = 0;

	let categories: string[] = Object.keys(mainData);
	let chosenCategoryIndex: number = 0;
	let category = mainData[categories[chosenCategoryIndex]];
	let brands = Object.values(category.brands);
	let events = brands.map((brand) => brand.events).flat();
</script>

<h1>Brands</h1>

<CategorySelect bind:chosenCategoryIndex {categories} />


<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
	<RadioItem bind:group={contentRadio} name="contentType" value={0}>Brands</RadioItem>
	<RadioItem bind:group={contentRadio} name="contentType" value={1}>Events</RadioItem>
</RadioGroup>


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
