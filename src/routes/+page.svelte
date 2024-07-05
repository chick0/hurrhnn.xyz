<script>
    import Container from "$lib/props/Container.svelte"
    import Content from "$lib/props/Content.svelte"
    import Meme from "$lib/props/Meme.svelte"

    let hiddenMenuFlag = false

    function doubleClickHandler() {
        hiddenMenuFlag = !hiddenMenuFlag
    }
</script>

<Container>
    <h1>HTML is NOT a Programming Language!</h1>

    <Meme />

    <Content>
        <p>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            HTML is not a programming language. The "<b on:dblclick={doubleClickHandler}>M</b>"
            stands for "Markup". Generally, a programming language allows you to describe some sort
            of process of doing something, whereas HTML is a way of adding context and structure to
            text.
        </p>

        <p>
            If you're looking to add more alphabet soup to your CV, don't classify them at all. Just
            put them in a big pile called "Technologies" or whatever you like. Remember, however,
            that anything you list is fair game for a question.
        </p>

        <p>
            HTML is so common that I'd expect almost any technology person to already know it
            &#40;although not stuff like CSS and so on&#41;, so you might consider not listing every
            initialism you've ever come across. I tend to regard CVs listing too many things as
            suspicious, so I ask more questions to weed out the stuff that shouldn't be listed.
            :&#41;
        </p>

        <p>
            However, if your HTML experience includes serious web design stuff including Ajax,
            JavaScript, and so on, you might talk about those in your "Experience" section.
        </p>

        <p>
            <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">Read more about HTML</a>
        </p>
    </Content>

    {#if hiddenMenuFlag}
        <div class="menu-buttons">
            <a class="button" href="/wol">WOL</a>
            <a class="button" href="https://status.hurrhnn.xyz">Status</a>
        </div>
    {/if}
</Container>

<style>
    .menu-buttons {
        display: flex;
        gap: 10px;
    }

    .menu-buttons a {
        text-align: center;
        width: 100%;
    }
</style>
