import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from "./components/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import addProductForm from "./pages/addProductForm"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "shop",
        component : Shop
    },
    {
        path: "/about",
        name: "about",
        component : About
    },
    {
        path: "/contact", 
        name: "contact",
        component : Contact
    },
    {
        path: "/delivery", 
        name: "delivery",
        component : Delivery
    },
    {
        path: "/cart",
        name: "cart",
        component : Cart
    },
    {
        path: "/addProductForm",
        name: "addProductForm",
        component : addProductForm
    },
]

const router = new VueRouter (
    {
        mode: "history",
        routes
    }
)

export default router