<div class="container">
    <slot />
</div>

<style>
    .container {
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 20px;
        padding-bottom: 60px;
    }

    @media (min-width: 700px) {
        .container {
            margin-left: 20%;
            margin-right: 20%;
        }
    }
</style>
