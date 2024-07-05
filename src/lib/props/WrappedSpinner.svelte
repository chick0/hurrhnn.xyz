<script>
    import Spinner from "./Spinner.svelte"
</script>

<div class="spinner-wrapper">
    <Spinner />
</div>

<style>
    .spinner-wrapper {
        background-color: rgba(0, 0, 0, 0.4);

        --z-index: 100;
        z-index: var(--z-index);

        position: fixed;
        width: 100vw;
        height: 100vh;
    }
</style>
