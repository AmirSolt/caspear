<script lang="ts">
    export let item: any;
</script>









<a class="card varient-soft card-hover overflow-hidden" href="/elements/cards">
    <header>
        <img src="{item.img}" class="{item.name}" alt="Post" />
    </header>
    <div class="p-4 space-y-4">
        <h6>Announcements</h6>
        <h3 data-toc-ignore>{item.name}</h3>
        <article>
            <p>
                {item.desc}
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <div class="flex-auto flex justify-between items-center">
            <small>On {item.date}</small>
        </div>
    </footer>
</a>