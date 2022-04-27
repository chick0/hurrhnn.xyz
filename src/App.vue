<template>
    <div class="container">
        <h1 class="display-2 py-5">HTML is NOT a Programming Language!</h1>

        <div class="py-3 row" style="text-align: center !important">
            <img
                :class="col"
                alt="HTML is NOT a Programming Language"
                v-for:="url in image_url"
                :src="url"
            />
        </div>

        <div class="lead py-5">
            HTML is not a programming language. The "<b @click="counter += 1"
                >M</b
            >" stands for "Markup". Generally, a programming language allows you
            to describe some sort of process of doing something, whereas HTML is
            a way of adding context and structure to text. If you're looking to
            add more alphabet soup to your CV, don't classify them at all. Just
            put them in a big pile called "Technologies" or whatever you like.
            Remember, however, that anything you list is fair game for a
            question. HTML is so common that I'd expect almost any technology
            person to already know it (although not stuff like CSS and so on),
            so you might consider not listing every initialism you've ever come
            across. I tend to regard CVs listing too many things as suspicious,
            so I ask more questions to weed out the stuff that shouldn't be
            listed. :) However, if your HTML experience includes serious web
            design stuff including Ajax, JavaScript, and so on, you might talk
            about those in your "Experience" section.
        </div>

        <div class="pb-5 d-grid">
            <a
                class="btn btn-primary btn-lg"
                href="https://en.wikipedia.org/wiki/HTML"
                target="_blank"
                rel="noreferrer"
                >About HTML</a
            >
        </div>

        <div class="pb-5" v-if="counter == 3">
            <a class="btn btn-danger btn-lg" href="WOL.php" target="_self"
                >WOL</a
            >&nbsp;
            <a
                class="btn btn-light btn-lg"
                href="https://hurrhnn.xyz/mirror/"
                target="_self"
                >Mirror</a
            >
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { ref } from "vue";
import images from "./images";

export default {
    setup() {
        const counter = ref(0);
        const img_keys = Object.keys(images);
        const image_url =
            images[img_keys[Math.floor(Math.random() * img_keys.length)]];

        return {
            counter: counter,
            image_url: image_url,
            col: `col-md-${Number(12 / image_url.length)} col-12`,
        };
    },
};
</script>
