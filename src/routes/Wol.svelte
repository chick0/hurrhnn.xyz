<script>
    let hideKeypad = false;

    let index = 0;
    let keyStore = ['_', '_', '_', '_'];
    const keyMap = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        [' ', '0', ' '],
    ];

    function appendKey(key){
        if(index < 4){
            keyStore[index] = key;
            index += 1;
        }
        
        if(index == 4){
            hideKeypad = true;

            // check password
            fetch('/WOL.php?work=do-wol', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: keyStore.join(''),
            }).then((resp) => resp.text()).then((data) => {
                index = 0;
                keyStore = ['_', '_', '_', '_'];
                hideKeypad = false;

                if(data == '200'){
                    alert("SUCCESS");
                } else {
                    alert("FAILED");
                }
            });
        }
    }
</script>

<section class="section">
    <div class="container">
        <h1 class="title is-1 has-text-white">WOL</h1>
        <p class="subtitle">PASSWORD REQUIRED</p>

        <div class="block has-text-centered">
            <h3 class="title is-3">
                {keyStore.join(' ')}
            </h3>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
    {#if hideKeypad == false}
        <div class="columns is-centered">
            <div class="column is-half">
            {#each keyMap as keyLine}
                <div class="columns is-narrow">
                {#each keyLine as key}
                    <div class="column has-text-centered">
                    {#if key != ' '}
                        <button
                            class="button is-dark is-large"
                            on:click={() => {appendKey(key);}}
                        >
                            {key}
                        </button>
                    {/if}
                    </div>
                {/each}
                </div>
            {/each}
            </div>
        </div>
    {/if}
    </div>
</section>