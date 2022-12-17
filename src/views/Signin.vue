<script>
import { api } from '../api';

export default{
  data(){
    return{
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login(){
      api.post("/users/signin", {
        email: this.user.email,
	      password: this.user.password
      }).then(e => {
        localStorage.setItem("user_id", e.data);
        window.location.replace("/home");
      }).catch(error => {
        error.response.data
      })
    }
  }
}

</script>

<template>
  <main>
    <div class="w-50 container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
        </div>
        <div class="form-group mt-5">
          <label for="exampleInputPassword1">Senha</label>
          <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
        </div>
        <button @click.prevent="login(user)" type="submit" class="btn btn-success mt-5">Entrar</button>
      </form>
    </div>
  </main>
</template>
