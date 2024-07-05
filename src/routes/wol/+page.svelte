WIP

<!-- 
<script>
    import { onMount } from "svelte"
    import { goto } from "$app/navigation"
    import Keyboard from "simple-keyboard"
    import "styles/wol.css"

    let display = undefined

    let input = undefined
    let keyboard = undefined

    let status = 0

    onMount(() => {
        keyboard = new Keyboard({
            onChange: (changed) => {
                input.value = changed
                if (changed.length == 0) {
                    display.innerText = "_"
                } else {
                    display.innerText = changed
                }
                status = 0
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
                                display.innerText = "SUCCESS"
                                status = 1
                                setTimeout(() => {
                                    goto("/")
                                }, 2000)
                            } else {
                                keyboard.setInput("")
                                display.innerText = "FAILED"
                                status = 2
                            }
                        })
                }
            },
            layout: {
                default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
            },
            theme: "hg-theme-default hg-layout-numeric numeric-theme",
        })
    })
</script>

<h1>WOL</h1>
<p>PASSWORD REQUIRED</p>

<p class={status == 1 ? "green" : status == 2 ? "red" : "number"} bind:this={display}>_</p>

<div>
    <input class="input" style="display:none" bind:this={input} />
    <div class="simple-keyboard"></div>
</div>

<style>
    div > p:first-child {
        display: block;
        text-align: center;
        padding-bottom: 30px;
        font-weight: 600;
        font-size: 30px;
    }

    p.red {
        color: var(--red);
    }

    p.green {
        color: var(--green);
    }

    p.number {
        letter-spacing: 3px;
    }
</style>
-->
