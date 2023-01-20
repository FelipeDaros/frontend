import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue";
import PainelSeguranca from "../views/PainelSeguranca.vue";
import Signin from "../views/Signin.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: Signin,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/painel-seguranca",
      name: "PainelSeguranca",
      component: PainelSeguranca,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
    },
  ]
})

export default router
