<div class="spinner">
    <!-- spinner from https://github.com/loadingio/css-spinner/ -->
    <div class="lds-dual-ring"></div>
</div>

<style>
    .spinner {
        --color: #fff;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: calc(var(--z-index) + 20);
    }

    .lds-dual-ring,
    .lds-dual-ring:after {
        box-sizing: border-box;
    }

    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6.4px solid var(--color);
        border-color: var(--color) transparent var(--color) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
