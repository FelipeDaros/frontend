import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue";
import PainelSeguranca from "../views/PainelSeguranca.vue";
import Signin from "../views/Signin.vue";
import indexCadastro from '../views/Cadastro/indexCadastro.vue';
import indexRelatorio from '../views/Relatorio/indexRelatorio.vue';
import indexGerarQRCode from '../views/GerarQRCode/indexGerarQRCode.vue';

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
      path: '/cadastro',
      name: 'cadastro',
      component: indexCadastro
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: indexRelatorio
    },
    {
      path: '/gerar-qr-code',
      name: 'index-gerar-qr-code',
      component: indexGerarQRCode
    },
  ]
})

export default router
