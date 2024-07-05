<script>
    import { pick } from "$lib/memes"
    import { onMount } from "svelte"

    /** @type {import("$lib/types/Meme").Meme | null} */
    let meme = null

    onMount(() => {
        meme = pick()
    })
</script>

{#if meme != null}
    <div class="meme" style="--size: {meme.images.length}">
        {#each meme.images as image}
            <img src={image.path} alt={image.alt} />
        {/each}
    </div>
{/if}

<style>
    .meme {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        --gap: 10px;
        gap: 10px;

        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media (min-width: 700px) {
        .meme > img {
            width: calc((100% / var(--size)) - var(--gap));
        }
    }
</style>
