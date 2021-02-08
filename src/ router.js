import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from "./components/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import addProductForm from "./pages/addProductForm"
import EditProductForm from "./pages/EditProductForm"
import OrderList from "./pages/OrderList"

import Login from "./components/Shop/components/Login";
import Signup from "./components/Shop/components/Signup";
import store from "./store";


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
        path: "/order-list", 
        name: "OrderList",
        component : OrderList
    },
    {
        path: "/addProductForm/new",
        name: "addProductForm",
        component : addProductForm
        
    },
    
    {
        path: "/addProductForm/:product_id",
        name: "addProductForms",
        component : addProductForm

    },
    {
        path: "/editProductForm",
        name: "EditProductForm",
        component : EditProductForm
        
    },

    {
        path: "/login",
        name: "Login",
        component : Login
    },
    {
        path: "/signup",
        name: "Signup",
        component : Signup
    }

]

const router = new VueRouter (
    {
        mode: "history",
        routes
    }
)


  
  router.beforeEach((to, from, next) => {
    let check =
      !store.getters["auth/isAuthenticated"]() &&
      !["/login", "/signup", "/", "/cart", "/delivery", "/delivery","/about","/contact","/orders/add","/orders","/cart/orders/add" ].includes(to.path);
  
    if (check) {
      // Недопускаємо до захищених роутів, якщо немає токена
  
      next({ path: "/login" });
      return;
    } else {
      next();
    }
  });

export default router