<script lang="ts">

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';


    let sortBys:string[] = ["Relevant", "Newest"];
    let chosenSortBy:string= sortBys[0];


</script>




<RadioGroup>

	{#each sortBys as sortBy}
		<RadioItem 
			bind:group={chosenSortBy} 
			name={sortBy} 
			value={sortBy}
			>
			{sortBy}
		</RadioItem>
	{/each}
</RadioGroup>