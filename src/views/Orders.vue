<script>
import { api } from '../api';

export default{
  data(){
    return{
      orders: []
    }
  },
  mounted(){
    api.get("/orders").then(order => {
      this.orders = order.data;
    })
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h3 class="text-center mt-4 mb-4">Lista de ordens de compras</h3>
      <table class="table table-dark text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{order.id}}</td>
            <td>{{order.user_id.email}}</td>
            <td>{{order.total}} R$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
