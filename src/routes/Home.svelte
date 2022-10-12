<script>
    import { memes } from "src/memes.js";

    let meme = memes[Math.floor(Math.random() * memes.length)];

    let show_hidden_button = false;

    function toggle() {
        show_hidden_button = !show_hidden_button;
        window.getSelection()?.removeAllRanges();
    }
</script>

<div class="container">
    <h1>HTML is NOT a Programming Language!</h1>

    <div class="meme len-{meme.images.length}">
        {#each meme.images as image}
            <img src="{image.path}" alt="{image.alt}" title="{image.alt}" />
        {/each}
    </div>

    <div class="content">
        <p>
            HTML is not a programming language. The "<b on:dblclick="{toggle}">M</b>" stands for "Markup". Generally, a
            programming language allows you to describe some sort of process of doing something, whereas HTML is a way
            of adding context and structure to text.
        </p>

        <p>
            If you're looking to add more alphabet soup to your CV, don't classify them at all. Just put them in a big
            pile called "Technologies" or whatever you like. Remember, however, that anything you list is fair game for
            a question.
        </p>

        <p>
            HTML is so common that I'd expect almost any technology person to already know it &#40;although not stuff
            like CSS and so on&#41;, so you might consider not listing every initialism you've ever come across. I tend
            to regard CVs listing too many things as suspicious, so I ask more questions to weed out the stuff that
            shouldn't be listed. :&#41;
        </p>

        <p>
            However, if your HTML experience includes serious web design stuff including Ajax, JavaScript, and so on,
            you might talk about those in your "Experience" section.
        </p>

        <p>
            <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">Read more about HTML</a>
        </p>
    </div>

    {#if show_hidden_button == true}
        <div class="buttons">
            <a class="button" href="#/wol">WOL</a>
            <a class="button" href="https://status.hurrhnn.xyz/">Status</a>
        </div>
    {/if}
</div>

<style>
    .meme {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
    }

    .meme > img {
        padding: 0;
        margin: 0;
    }

    @media (min-width: 700px) {
        .meme > img:not(:last-child) {
            margin-right: 10px;
        }

        .meme.len-2 > img {
            width: calc((100% / 2) - (10px * 1));
        }

        .meme.len-4 > img {
            width: calc((100% / 4) - (10px * 3));
        }
    }

    .content > p {
        margin-bottom: 20px;
    }

    .buttons > .button {
        width: calc(50% - 3px);
        text-align: center;
    }
</style>
