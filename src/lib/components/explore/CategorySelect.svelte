
<script lang="ts">

	import type { Category } from '$lib/data/marketData';

    export let categories:Category[] = [];
    export let chosenCategoryId:string;

</script>







<select class="select" bind:value={chosenCategoryId}>
	{#each categories as category}
		<option 
			value={category.id} 
			selected={category.id === chosenCategoryId}
			>
			{category.name}
		</option>
	{/each}
</select>