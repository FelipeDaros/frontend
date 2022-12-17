<script>
import {api} from "../api/index";

  export default{
    data(){
      return{
        products: [],
        cart: [],
        listProducts: [],
        price: 0
      }
    },
    async mounted(){
      await api.get('/products').then(product => this.products = product.data).catch(erro => console.log(erro));
    },
    methods: {
      addCart(product){
        this.cart.push(product);
      },

      inCart(product){
        return this.cart.indexOf(product) != -1
      },

      removeCart(product){
        this.cart = this.cart.filter((prod, index) => product != prod);
      },

      async checkout(products){
        const user_id = localStorage.getItem("user_id").toString();

        products.map(response => {
          this.listProducts.push(response.id);
        })

        console.log(this.listProducts);

        products.map(e => {
          var totalValue = this.price+=e.price
          this.price = totalValue;
        });
        
        await api.post("/orders", {
          user_id,
          total: this.price,
          products_id: this.listProducts
        }).then(() => {
          window.location.replace("/orders");
        })
      }
    }
  }
</script>

<template>
  <main>
      <div class="container mb-4">
        <div class="row">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card mt-4" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Quantidade: {{product.quantity}}</p>
                <p class="card-text">Preço: {{product.price}} R$</p>
                <a class="btn btn-danger" 
                  @click.prevent="removeCart(product)" 
                  v-if="inCart(product)"
                  >Remover do carrinho
                </a>
                <a class="btn btn-success" 
                  @click.prevent="addCart(product)" 
                  v-if="!inCart(product)"
                  >Adicionar ao carrinho
                </a>
              </div>
            </div>
          </div>
        </div>
        <a class="btn btn-success w-25 mt-5 container" 
          @click.prevent="checkout(cart)">
          Finalizar compra!
        </a>
      </div>
  </main>
</template>
