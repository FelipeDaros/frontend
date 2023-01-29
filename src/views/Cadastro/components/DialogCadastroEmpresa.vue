<template>
  <Dialog
    :visible="display"
    :modal="true"
    :closable="false"
    class="text-center"
    style="width: 40%"
  >
    <h3>Cadastro da empresa</h3>
    <div class="flex justify-content-center flex-column">
      <div class="mt-4">
        <h6>Informe o nome da empresa</h6>
        <InputText type="text" v-model="form.name" />
      </div>
      <div class="mt-4">
        <h6>Selecione a cidade</h6>
        <select v-model="city" class="w-25 mt-2">
          <option v-for="option in citys" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="mt-4">
      <Button
        @click="enviarFormulario"
        label="Salvar"
        class="p-button-success"
      />
    </div>
    <div class="card mt-4">
      <h5>Vertical</h5>
      <DataTable
        :value="companys"
        :scrollable="true"
        scrollHeight="400px"
        :loading="loading"
      >
        <Column field="id" header="ID" style="min-width: 200px"></Column>
        <Column field="name" header="Nome" style="min-width: 200px"></Column>
      </DataTable>
    </div>
    <Button @click="close" label="Fechar" class="p-button-danger mt-2" />
  </Dialog>
</template>

<script>
import { api } from "../../../api/index.js";
export default {
  name: "dialogCadastroEmpresa",
  data() {
    return {
      display: false,
      city: "",
      companys: "",
      citys: [
        "Içara",
        "Criciúma",
        "Balneário Rincao",
        "Balneário Toreniro",
        "Cocal do Sul",
      ],
      form: {
        name: "",
        city: "",
      },
    };
  },
  methods: {
    async enviarFormulario() {
      if (!this.form.city && !this.form.name) {
        return this.$toast.add({
          severity: "error",
          summary: "Preencha os campos",
          life: 3000,
        });
      }
      try {
        this.form.city = this.city;
        await api.post("/company", this.form);
        this.$toast.add({
          severity: "success",
          summary: "Informação foram salvas",
          detail: "Usuário cadastrado com sucesso!",
          life: 3000,
        });
        this.form = "";
        this.recarregarListaCompanys();
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Informação sobre o cadastro",
          detail: `${error.response.data.message}`,
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
    async buscarCopanys() {
      const { data } = await api.get("/company");
      this.companys = data;
    },
  },
  async mounted() {
    this.buscarCopanys();
  },
  watch: {
    async form() {
      this.buscarCopanys();
    },
  },
};
</script>
