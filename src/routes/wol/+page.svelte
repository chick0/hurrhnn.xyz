<script>
    import { onDestroy, onMount } from "svelte"
    import Container from "$lib/props/Container.svelte"
    import WrappedSpinner from "$lib/props/WrappedSpinner.svelte"

    let isMounted = false

    let isLoading = false

    /** @type {"FAILED" | "SUCCESS" | string} */
    let display = "READY"

    /** @type {"" | "text-failed" | "text-success"} */

    let displayColor = ""

    /** @type {string[]} */
    let keypadInput = []

    function calcDisplayColor() {
        if (display == "FAILED") {
            displayColor = "text-failed"
        } else if (display == "SUCCESS") {
            displayColor = "text-success"
        } else {
            displayColor = ""
        }
    }

    function action() {
        if (isLoading) {
            return
        }

        const payload = keypadInput.join("")

        if (payload.length == 0) {
            return
        }

        isLoading = true

        fetch("/WOL.php?work=do-wol", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `password=${payload}`,
        })
            .then(async (resp) => {
                const result = await resp.text()

                if (result == "200") {
                    display = "SUCCESS"
                } else {
                    display = "FAILED"
                }

                calcDisplayColor()
                isLoading = false
            })
            .catch(() => {
                alert("ERROR!")

                display = "FAILED"

                calcDisplayColor()
                isLoading = false
            })
    }

    /**
     * @param {import("$lib/types/Keypad").KeypadButtons} key
     */
    function onKeyPressed(key) {
        if (isLoading) {
            return
        }

        if (key.length == 1) {
            if (keypadInput.length < 10) {
                keypadInput.push(key)
            }
        } else {
            switch (key) {
                case "back":
                    keypadInput.pop()
                    break
                case "return":
                    action()
                    break
                default:
                    return
            }
        }

        if (keypadInput.length == 0) {
            display = "READY"
        } else {
            display = keypadInput.join(" ")
            calcDisplayColor()
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    function onKeyDownHandler(event) {
        switch (event.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                onKeyPressed(event.key)
                break

            case "Enter":
                onKeyPressed("return")
                break

            case "Backspace":
                onKeyPressed("back")
                break
        }
    }

    onMount(() => {
        if (!isMounted) {
            window.addEventListener("keydown", onKeyDownHandler)
            isMounted = true
        }
    })

    onDestroy(() => {
        if (isMounted) {
            window.removeEventListener("keydown", onKeyDownHandler)
            isMounted = false
        }
    })
</script>

{#if isLoading}
    <WrappedSpinner />
{/if}

<Container>
    <h1>WOL</h1>
    <p>PASSWORD REQUIRED</p>
</Container>

<div class="keypad">
    <div class="keypad-status {displayColor}">
        {display}
    </div>
    <div class="keypad-group">
        <button on:click={() => onKeyPressed("1")}>1</button>
        <button on:click={() => onKeyPressed("2")}>2</button>
        <button on:click={() => onKeyPressed("3")}>3</button>
    </div>
    <div class="keypad-group">
        <button on:click={() => onKeyPressed("4")}>4</button>
        <button on:click={() => onKeyPressed("5")}>5</button>
        <button on:click={() => onKeyPressed("6")}>6</button>
    </div>
    <div class="keypad-group">
        <button on:click={() => onKeyPressed("7")}>7</button>
        <button on:click={() => onKeyPressed("8")}>8</button>
        <button on:click={() => onKeyPressed("9")}>9</button>
    </div>
    <div class="keypad-group">
        <button on:click={() => onKeyPressed("back")}>←</button>
        <button on:click={() => onKeyPressed("0")}>0</button>
        <button on:click={() => onKeyPressed("return")}>↵</button>
    </div>
</div>

<style>
    .keypad {
        --gap: 10px;
        display: block;
        width: 100%;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 800px) {
        .keypad {
            width: 500px;
        }
    }

    .keypad-status {
        text-align: center;
        margin-bottom: 40px;

        font-weight: 800;
    }

    .keypad-group {
        display: flex;
        gap: var(--gap);
        flex-wrap: wrap;
        justify-content: center;
    }

    .keypad-group:not(:last-child) {
        margin-bottom: var(--gap);
    }

    .keypad button {
        font: inherit;
        width: calc(100% / 3 - var(--gap) * 2);
        height: 70px;

        border: 0;
        background-color: #e9e9ed;
        color: #000;
    }

    .keypad button:hover {
        cursor: pointer;
        filter: opacity(0.9);
    }

    .text-failed {
        color: #e94747;
    }

    .text-success {
        color: #49cd2e;
    }
</style>
