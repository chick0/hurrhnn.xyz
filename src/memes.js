/**
 * @typedef Image
 * @property {string} alt image alt
 * @property {string} path image path
 */

/**
 * @typedef Meme
 * @property {Image[]} images
 */

/**
 * @type {Meme[]}
 */
export const memes = [
    {
        images: [
            {
                alt: "A: What do you want? / B: I want to learn HTML programming language",
                path: "memes/a/1.jpg",
            },
            {
                alt: "A: HTML is not a programming language / B: (dumped on a cliff)",
                path: "memes/a/2.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: What programming language do you use?",
                path: "memes/b/1.jpg",
            },
            {
                alt: "B: HTML",
                path: "memes/b/2.jpg",
            },
            {
                alt: "A: Oh no",
                path: "memes/b/3.jpg",
            },
            {
                alt: "A: It's retarded",
                path: "memes/b/4.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: FEAR NOT, LADY! I'LL SAVE YOU!",
                path: "memes/c/1.jpg",
            },
            {
                alt: "B: HTML IS THE *BEST* PROGRAMING LANGUAGE!",
                path: "memes/c/2.jpg",
            },
            {
                alt: "A: ...",
                path: "memes/c/3.jpg",
            },
            {
                alt: "A: yeah she was already dead when i found her / C: (writing the testimony of B)",
                path: "memes/c/4.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: Kids(B,C), violence is never the answer",
                path: "memes/d/1.jpg",
            },
            {
                alt: "B: HTML is a Programming Language",
                path: "memes/d/2.jpg",
            },
            {
                alt: "A: ...",
                path: "memes/d/3.jpg",
            },
            {
                alt: "A: (hit B's face)",
                path: "memes/d/4.jpg",
            },
        ],
    },
    {
        images: [
            {
                alt: "A: No it doesn't affect my baby",
                path: "memes/e/1.jpg",
            },
            {
                alt: "*12 years layer* / B: (How to hack NASA with HTML)",
                path: "memes/e/2.jpg",
            },
        ],
    },
];
