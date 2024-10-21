/**
 * @returns {import("$lib/types/Meme").Meme}
 */
export function pick() {
    return memes[Math.floor(Math.random() * memes.length)]
}

/**
 * @type {import("$lib/types/Meme").Meme[]}
 */
const memes = [
    {
        images: [
            {
                alt: "A: What do you want? / B: I want to learn HTML programming language",
                path: "/_memes/a/1.jpg",
            },
            {
                alt: "A: HTML is not a programming language / B: (dumped on a cliff)",
                path: "/_memes/a/2.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: What programming language do you use?",
                path: "/_memes/b/1.jpg",
            },
            {
                alt: "B: HTML",
                path: "/_memes/b/2.jpg",
            },
            {
                alt: "A: Oh no",
                path: "/_memes/b/3.jpg",
            },
            {
                alt: "A: It's retarded",
                path: "/_memes/b/4.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: FEAR NOT, LADY! I'LL SAVE YOU!",
                path: "/_memes/c/1.jpg",
            },
            {
                alt: "B: HTML IS THE *BEST* PROGRAMING LANGUAGE!",
                path: "/_memes/c/2.jpg",
            },
            {
                alt: "A: ...",
                path: "/_memes/c/3.jpg",
            },
            {
                alt: "A: yeah she was already dead when i found her / C: (writing the testimony of B)",
                path: "/_memes/c/4.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: Kids(B,C), violence is never the answer",
                path: "/_memes/d/1.jpg",
            },
            {
                alt: "B: HTML is a Programming Language",
                path: "/_memes/d/2.jpg",
            },
            {
                alt: "A: ...",
                path: "/_memes/d/3.jpg",
            },
            {
                alt: "A: (hit B's face)",
                path: "/_memes/d/4.jpg",
            },
        ],
    },
]
