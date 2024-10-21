import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        proxy: {
            "/WOL.php": "https://hurrhnn.xyz",
        },
    },
})
