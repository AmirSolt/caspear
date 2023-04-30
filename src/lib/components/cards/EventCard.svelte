<script lang="ts">
    export let event: any;
</script>









<a class="card varient-soft card-hover overflow-hidden" href="/elements/cards">
    <header>
        <img src="{event.img}" class="{event.name}" alt="Post" />
    </header>
    <div class="p-4 space-y-4">
        <h6>Announcements</h6>
        <h3 data-toc-ignore>{event.name}</h3>
        <article>
            <p>
                {event.desc}
            </p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start events-center space-x-4">
        <div class="flex-auto flex justify-between events-center">
            <small>On {event.date}</small>
        </div>
    </footer>
</a>