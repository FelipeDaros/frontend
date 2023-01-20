<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800 bg-cover">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active text-white" to="/home">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active text-white" to="/painel-seguranca">Painel Segurança</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active text-white" to="/products">Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active text-white" to="/orders">Orders</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
<RouterView />
</template>
