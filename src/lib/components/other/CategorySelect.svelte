
<script lang="ts">


    export let categories:string[] = [];
    export let chosenCategoryIndex:number = 0;

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