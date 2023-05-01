<script lang="ts">

    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';



    let valueMultiple: string[] = ['books', 'movies'];

    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

    function trigger(position: 'left' | 'top' | 'right' | 'bottom'): void {
            // const s: DrawerSettings = { 
            //     id: 'demo', 
            //     position
            //  };
            // drawerStore.open(s);


            
            const drawerSettings: DrawerSettings = {
                id: 'example-3',
                // Provide your property overrides:
                bgDrawer: 'bg-purple-900 text-white',
                bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
                // width: 'w-[280px] md:w-[480px]',
                width: 'md:w-1/2 w-2/3',
                padding: 'p-4',
                rounded: 'rounded-xl',
                position
            };
            drawerStore.open(drawerSettings);

        }

</script>






<button class="btn variant-ringed" on:click={() => { trigger('right'); }}>
        Brand Filter
</button>


<Drawer >
    <ListBox multiple>
        <ListBoxItem bind:group={valueMultiple} name="medium" value="books">Books</ListBoxItem>
        <ListBoxItem bind:group={valueMultiple} name="medium" value="movies">Movies</ListBoxItem>
        <ListBoxItem bind:group={valueMultiple} name="medium" value="tv">TV</ListBoxItem>
    </ListBox>
</Drawer>