<script lang="ts">

	import {events} from '$lib/data/events';

	import Card from '$lib/components/cards/Card.svelte';


	let categories = Object.keys(events);
	let chosenCategoryIndex = 0;
	$: chosenCategory = categories[chosenCategoryIndex];

</script>


<select class="select" bind:value={chosenCategoryIndex}>
	{#each categories as category, index}
		<option 
			value={index} 
			selected={index === chosenCategoryIndex}
			>
			{category}
		</option>
	{/each}
</select>

{#each events[chosenCategory].items  as item}
	<Card item={item} />
{/each}


