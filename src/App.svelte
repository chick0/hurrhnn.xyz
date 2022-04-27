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
    let col = `col-md-${Number(12 / urls.length)} col-12`;
</script>

<div class="container">
    <h1 class="display-2 py-5">HTML is NOT a Programming Language!</h1>

    <div class="py-3 row" style="text-align: center !important">
    {#each urls as url }
        <img class="{col}" alt="HTML is NOT a Programming Language" src="{url}">
    {/each}
    </div>

    <div class="lead py-5">
        HTML is not a programming language.
        
        The "<b on:click={() => { counter += 1 }}>M</b>" stands for "Markup".
        
        Generally, a programming language allows you to describe some sort of process of doing something, whereas HTML is a way of adding context and structure to text. 
        
        If you're looking to add more alphabet soup to your CV, don't classify them at all.
        
        Just put them in a big pile called "Technologies" or whatever you like.
        
        Remember, however, that anything you list is fair game for a question.
        
        HTML is so common that I'd expect almost any technology person to already know it (although not stuff like CSS and so on), so you might consider not listing every initialism you've ever come across.
        
        I tend to regard CVs listing too many things as suspicious, so I ask more questions to weed out the stuff that shouldn't be listed. :)

        However, if your HTML experience includes serious web design stuff including Ajax, JavaScript, and so on, you might talk about those in your "Experience" section.
    </div>

    <div class="pb-5 d-grid">
        <a class="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">About HTML</a>
    </div>

{#if counter == 3}
    <div class="pb-5">
        <a class="btn btn-danger btn-lg" href="WOL.php" target="_self">WOL</a>
        
        <a class="btn btn-light btn-lg" href="https://hurrhnn.xyz/mirror/" target="_self">Mirror</a>
    </div>
{/if}
</div>
