<script>
    import "../wol.css";
    import { push } from "svelte-spa-router";
    import { onMount } from "svelte";
    import Keyboard from "simple-keyboard";

    let display = undefined;

    let input = undefined;
    let keyboard = undefined;

    onMount(() => {
        keyboard = new Keyboard({
            onChange: (changed) => {
                input.value = changed;

                if (changed.length == 0) display.innerText = "_";
                else display.innerText = changed;

                if (display.classList.contains("has-text-danger"))
                    display.classList.remove("has-text-danger");
            },
            onKeyPress: (button) => {
                if (button == `{enter}`) {
                    fetch("/WOL.php?work=do-wol", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `password=${input.value}`,
                    })
                        .then((resp) => resp.text())
                        .then((data) => {
                            if (data == "200") {
                                display.innerText = "SUCCESS";
                                display.classList.add("has-text-success");

                                setTimeout(() => {
                                    push("/");
                                }, 2000);
                            } else {
                                keyboard.setInput("");
                                display.innerText = "FAILED";
                                display.classList.add("has-text-danger");
                            }
                        });
                }
            },
            layout: {
                default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
            },
            theme: "hg-theme-default hg-layout-numeric numeric-theme",
        });
    });
</script>

<section class="section">
    <div class="container">
        <h1 class="title is-1 has-text-white">WOL</h1>
        <p class="subtitle">PASSWORD REQUIRED</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="block has-text-centered pb-4">
            <h3 class="title is-3" bind:this="{display}">_</h3>
        </div>

        <div class="block">
            <input class="input" style="display:none" bind:this="{input}" />
            <div class="simple-keyboard"></div>
        </div>
    </div>
</section>
