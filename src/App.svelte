<script>
    const images = {
        a: ["/assets/a/1.jpg", "/assets/a/2.jpg"],
        b: ["/assets/b/1.jpg", "/assets/b/2.jpg", "/assets/b/3.jpg", "/assets/b/4.jpg"],
        c: ["/assets/c/1.jpg", "/assets/c/2.jpg", "/assets/c/3.jpg", "/assets/c/4.jpg"],
        d: ["/assets/d/1.jpg", "/assets/d/2.jpg", "/assets/d/3.jpg", "/assets/d/4.jpg"],
        e: ["/assets/e/1.jpg", "/assets/e/2.jpg"],
    };

	let counter = 0;
    let keys = Object.keys(images);
    let urls = images[keys[Math.floor(Math.random() * keys.length)]];
    let col = `is-${Number(12 / urls.length)}`;
</script>

<section class="section">
    <div class="container">
        <h1 class="title is-1 has-text-white">HTML is NOT a Programming Language!</h1>
        <p class="subtitle">
            <a href="https://stackoverflow.com/a/145179" target="_blank" rel="noreferrer">HTML is NOT a Programming Language!</a>
        </p>

        <div class="columns">
        {#each urls as url }
            <img class="column {col}" alt="HTML is NOT a Programming Language" src="{url}">
        {/each}
        </div>

        <div class="content is-medium">
            <p>HTML is not a programming language.
            The "<b on:click={() => { counter += 1 }}>M</b>" stands for "Markup".
            Generally, a programming language allows you to describe some sort of process of doing something, whereas HTML is a way of adding context and structure to text.</p>

            <p>If you're looking to add more alphabet soup to your CV, don't classify them at all.
            Just put them in a big pile called "Technologies" or whatever you like.
            Remember, however, that anything you list is fair game for a question.</p>

            <p>HTML is so common that I'd expect almost any technology person to already know it (although not stuff like CSS and so on), so you might consider not listing every initialism you've ever come across.
            I tend to regard CVs listing too many things as suspicious, so I ask more questions to weed out the stuff that shouldn't be listed. :)</p>

            <p>However, if your HTML experience includes serious web design stuff including Ajax, JavaScript, and so on, you might talk about those in your "Experience" section.</p>
        </div>

        <p>
            <a class="button is-link is-large is-fullwidth" href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">Read more about  HTML</a>
        </p>

    {#if counter == 3}
        <br>
        <div class="columns">
            <div class="column">
                <a class="button is-danger is-large is-fullwidth" href="WOL.php" target="_self">WOL</a>
            </div>
            <div class="column">
                <a class="button is-warning is-large is-fullwidth" href="https://hurrhnn.xyz/mirror/" target="_self">Mirror</a>
            </div>
        </div>
    {/if}
    </div>
</section>
