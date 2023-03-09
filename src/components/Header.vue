<template>
  <nav v-show="isLogado" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item rounded">
              <RouterLink class="nav-link active text-white" to="/home"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item rounded">
              <RouterLink
                class="nav-link active text-white"
                to="/painel-seguranca"
                >Painel Segurança</RouterLink
              >
            </li>
            <li class="nav-item rounded">
              <RouterLink class="nav-link active text-white" to="/cadastro"
                >Cadastro</RouterLink
              >
            </li>
            <li class="nav-item rounded">
              <RouterLink class="nav-link active text-white" to="/relatorio"
                >Relatorio</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default{
  data(){
    return{
      isLogado: false
    }
  },
  mounted(){
    this.isLogado = Boolean(window.localStorage.getItem('isLogado'));
  } 
}
</script>