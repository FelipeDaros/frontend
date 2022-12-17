<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/home">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/shop">Shop</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/products">Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/orders">Orders</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
<RouterView />
</template>
