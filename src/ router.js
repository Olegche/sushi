import Vue from 'vue'
import VueRouter from 'vue-router'

import Store from "./components/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";

Vue.use(VueRouter);

const routes = [
    {
        path: "/", component : Store
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
]

const router = new VueRouter (
    {
        mode: "history",
        routes
    }
)

export default router