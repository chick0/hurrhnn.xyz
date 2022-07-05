import Home from "./routes/Home.svelte";
import Wol from "./routes/Wol.svelte";

// Routes
export default {
    "/": Home,
    "/wol": Wol,

    "*": Home,
};
