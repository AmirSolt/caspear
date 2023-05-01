<script lang="ts">

    import { TabGroup, Tab } from '@skeletonlabs/skeleton';


    export const contentTabs:string[] = ['Brands', 'Events'];
    export let chosenContentTab:string = contentTabs[0];

</script>




<TabGroup>
    {#each contentTabs as tab}
        <Tab bind:group={chosenContentTab} name={tab} value={tab}>{tab}</Tab>
    {/each}

    

</TabGroup>
			