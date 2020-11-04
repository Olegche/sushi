import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from "./components/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";

Vue.use(VueRouter);

const routes = [
    {
        path: "/", component : Shop
    },
    {
        path: "/about", component : About
    },
    {
        path: "/contact", component : Contact
    },
    {
        path: "/delivery", component : Delivery
    },
    {
        path: "/cart", component : Cart
    },
]

const router = new VueRouter (
    {
        mode: "history",
        routes
    }
)

export default router