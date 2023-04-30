


<script lang="ts">

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    export let contentRadio: number = 0;

</script>



<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
	<RadioItem bind:group={contentRadio} name="contentType" value={0}>Brands</RadioItem>
	<RadioItem bind:group={contentRadio} name="contentType" value={1}>Events</RadioItem>
</RadioGroup>