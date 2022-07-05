import { wrap } from "svelte-spa-router/wrap";

import Home from "./routes/Home.svelte";

// Routes
export default {
    "/": Home,
    "/wol": wrap({
        asyncComponent: () => import("./routes/Wol.svelte"),
    }),

    "*": wrap({
        asyncComponent: () => import("./NotFound.svelte"),
    }),
};
