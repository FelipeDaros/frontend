<template>
  <Dialog
    :visible="display"
    :modal="true"
    :closable="false"
    class="text-center"
    style="width: 40%"
  >
    <h3>Cadastro de equipamento</h3>
    <div class="flex justify-content-center flex-column">
      <div class="mt-4">
        <h6>Informe o nome do equipamento</h6>
        <InputText type="text" v-model="name" />
      </div>
    </div>
    <div class="mt-4">
      <Button @click="cadastrar" label="Salvar" class="p-button-success mr-2" />
      <Button @click="close" label="Cancelar" class="p-button-danger ml-2" />
    </div>
  </Dialog>
</template>

<script>
import { api } from "../../../api";
export default {
  data() {
    return {
      display: false,
      name: "",
    };
  },
  methods: {
    async cadastrar() {
      if (!this.name) {
        return this.$toast.add({
          severity: "error",
          summary: "Preencha os campos",
          life: 3000,
        });
      }
      try {
        await api.post("/itens", {
          name: this.name,
        });
        this.$toast.add({
          severity: "success",
          summary: "Informação foram salvas",
          detail: "Equipamento cadastrado com sucesso!",
          life: 3000,
        });
        this.display = false;
        this.name = "";
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Informação sobre o cadastro",
          detail: `${error.response.data.error}`,
          life: 3000,
        });
      }
    },
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
  },
};
</script>
