<script>
    import { push } from "svelte-spa-router";
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";
    import "../wol.css";

    let keyboard = undefined;
    setTimeout(keyboardInit, 80);

    function keyboardInit(){
        keyboard = new Keyboard({
            onChange: (input) => {
                document.getElementById("keypad").value = input;

                if(input.length == 0)
                    document.getElementById("keypad-display").innerText = "_";
                else
                    document.getElementById("keypad-display").innerText = input;

                if(document.getElementById("keypad-display").classList.contains("has-text-danger"))
                    document.getElementById("keypad-display").classList.remove("has-text-danger");
            },
            onKeyPress: (button) => {
                if(button == `{enter}`){
                    document.getElementById("keypad-block").style.display = "none";

                    fetch('/WOL.php?work=do-wol', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: document.getElementById("keypad").value,
                    }).then((resp) => resp.text()).then((data) => {
                        if(data == '200'){
                            document.getElementById("keypad-display").innerText = "SUCCESS";
                            document.getElementById("keypad-display").classList.add("has-text-success");

                            setTimeout(() => {
                                push("/");
                            }, 2000);
                        } else {
                            keyboard.setInput("");
                            document.getElementById("keypad-display").innerText = "FAILED";
                            document.getElementById("keypad-display").classList.add("has-text-danger");
                            document.getElementById("keypad-block").style.display = "block";
                        }
                    });
                }
            },
            layout: {
                default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
            },
            theme: "hg-theme-default hg-layout-numeric numeric-theme"
        });
    }
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
            <h3 id="keypad-display" class="title is-3">_</h3>
        </div>

        <div class="block" id="keypad-block">
            <input id="keypad" class="input" style="display:none">
            <div class="simple-keyboard"></div>
        </div>
    </div>
</section>

