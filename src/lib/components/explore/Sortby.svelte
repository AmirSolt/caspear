<script lang="ts">


    let sortBys:string[] = ["Hottest", "Newest", "Oldest"];
    let chosenSortBy:string= sortBys[0];


</script>




<select class="select" bind:value={chosenSortBy}>
	{#each sortBys as sortBy}
		<option 
			value={sortBy} 
			selected={sortBy === chosenSortBy}
			>
			{sortBy}
		</option>
	{/each}
</select>