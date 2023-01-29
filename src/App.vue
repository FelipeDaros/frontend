<script setup>
import { RouterLink, RouterView } from "vue-router";
import Toast from "primevue/toast";
</script>

<template>
  <header class="bg-gray-800 bg-cover">
    <Toast />
    <nav class="navbar navbar-expand-lg">
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
  </header>
  <RouterView />
</template>


<style>
  li:hover{
    background-color: gray;
    transition: 1s;
  }
</style>
