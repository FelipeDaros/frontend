<script setup>
import { RouterView } from "vue-router";
import Toast from "primevue/toast";
import Header from "./components/Header.vue"
</script>

<template>
  <header class="bg-gray-800 bg-cover">
    <Toast />
    <Header></Header> 
  </header>
  <RouterView />
</template>


<style>
  li:hover{
    background-color: gray;
    transition: 1s;
  }
</style>
