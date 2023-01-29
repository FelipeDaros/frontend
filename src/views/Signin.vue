<template>
  <div class="focustrap-demo" style="padding-top: 10%">
    <h4 class="text-center mb-5">Login</h4>
    <div class="flex justify-content-center p-fluid">
      <div v-focustrap class="card">
        <div class="field">
          <InputText
            id="input"
            v-model="user.name"
            type="text"
            placeholder="Nome"
            autofocus
          />
        </div>
        <div class="field">
          <div class="p-input-icon-right">
            <i class="pi pi-envelope" />
            <InputText
              id="password"
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <Button
          type="submit"
          label="Entrar"
          @click="login"
          class="mt-2 p-button-success"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../api";

export default {
  data() {
    return {
      result: {},
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (!this.user.name || !this.user.password) {
        return this.$toast.add({
          severity: "error",
          summary: "Preencha os campos",
          life: 3000,
        });
      }
      try {
        const { data } = await api.post("/auth", {
          name: this.user.name,
          password: this.user.password,
        });
        this.result = data;
        window.sessionStorage.setItem('user', data);
        this.$router.push('/home');
        return this.$toast.add({
          severity: "success",
          summary: "Informação do login",
          detail: "Login efetuado com sucesso!",
          life: 3000,
        });
      } catch (error) {
        return this.$toast.add({
          severity: "error",
          summary: "Informação sobre o login",
          detail: `${error.response.data.message}`,
          life: 3000,
        });
      }
    },
  },
};
</script>
