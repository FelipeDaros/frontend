<script>
import { toHandlers } from 'vue';
import { api } from '../api';

export default{
  data(){
    return{
      products:[],
      product: {
        name: "",
        quantity: 0,
        price: 0
      },
      newProduct: {
        id: "",
        name: "",
        quantity: "",
        price: ""
      }
    }
  },
  mounted() {
    this.findProducts()
  },
  methods: {
    findProducts(){
      api.get('/products')
    .then(product => this.products = product.data)
    .catch(erro => console.log(erro));
    },
    create(product){
      api.post("/products", {
        name: product.name,
        quantity: product.quantity,
        price: product.price
      }).then(() => {
        this.findProducts();
        this.product.name = "",
        this.product.quantity= 0,
        this.product.price = 0
      }).catch(error => console.log(error))
    },
    deleteProduct(id){
      api.delete(`/products/${id}`)
      .then(() => {
        this.findProducts();
      })
      .catch(error => console.log(error));
    },
    findOneProduct(id){
      api.get(`/products/${id}`)
      .then(response => this.newProduct = response.data);
    },
    updateProduct(id){
      api.put(`/products/${id}`, {
        name: this.newProduct.name,
        quantity: this.newProduct.quantity,
        price: this.newProduct.price
      })
      .then(() => {
        this.findProducts();
      })
      .catch(error => console.log(error))
    },
  }
}

</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="w-50">
            <form class="mt-4">
              <div class="form-group">
                <label>Nome</label>
                <input v-model="product.name" type="text" class="form-control">
              </div>
              <div class="form-group mt-2">
                <label>Quatidade</label>
                <input v-model="product.quantity" type="number" class="form-control">
              </div>
              <div class="form-group mt-2">
                <label>Preço</label>
                <input v-model="product.price" type="number" class="form-control">
              </div>
              <button @click.prevent="create(product)" type="submit" class="btn btn-success mt-4">Cadastrar</button>
            </form>
          </div>
        </div>
        <div class="col">
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">QUANTIDADE</th>
                <th scope="col">PREÇO</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price}}</td>
                <td>
                  <button @click="findOneProduct(product.id)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn"><td><img src="src/assets/edit-3.svg" alt="edit"></td></button>
                  <button @click="deleteProduct(product.id)" class="btn"><td><img src="src/assets/trash.svg" alt="delete"></td></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <p>ID</p>
            <input type="text" v-model="newProduct.id" disabled>
          </div>
          <div class="mt-4">
            <p>Nome</p>
            <input type="text" v-model="newProduct.name">
          </div>
          <div class="mt-4">
            <p>Quantidade</p>
            <input type="text" v-model="newProduct.quantity">
          </div>
          <div class="mt-4">
            <p>Preço</p>
            <input type="text" v-model="newProduct.price">
          </div>
          
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button @click="updateProduct(newProduct.id)" type="button" class="btn btn-primary">Atualizar</button>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>
