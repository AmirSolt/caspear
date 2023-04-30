<script lang="ts">
    export let brand:any;
</script>




<a class="card varient-soft card-hover overflow-hidden" href="/elements/cards">
    <header>
        <img src="{brand.img}" class="{brand.name}" alt="Post" />
    </header>
    <div class="p-4 space-y-4">
        <h6>Announcements</h6>
        <h3 data-toc-ignore>{brand.name}</h3>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start brands-center space-x-4">
        
    </footer>
</a>