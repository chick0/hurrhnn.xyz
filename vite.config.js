import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import purgecss from "@fullhuman/postcss-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/variables.scss" as *;',
            },
        },

        postcss: {
            plugins: [
                purgecss({
                    content: ["./index.html", "./src/**/*.svelte"],
                    safelist: ["html", "body", "button", "input"],
                }),
            ],
        },
    },
});
