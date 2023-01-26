<template>
  <Dialog
    :visible="display"
    :modal="true"
    closable="false"
    class="text-center"
    style="width: 40%"
  >
    <h3>Cadastro de posto de serviço</h3>
    <div class="flex justify-content-center flex-column">
      <div>
        <h6>Informe o nome do posto de serviço</h6>
        <InputText type="text" v-model="form.name" />
      </div>
      <div class="mt-5">
        <h6>Informe a empresa</h6>
        <select v-model="form.company_id" class="w-25">
          <option v-for="company in companys">{{ company.name }}</option>
        </select>
      </div>
      <div class="mt-5">
        <h6>Informe os equipamentos</h6>
        <MultiSelect
          v-model="selectedItens"
          :options="itens"
          placeholder="Selecione os equipamentos do posto"
        />
      </div>
    </div>
    <div class="mt-4">
      <Button @click="salvar" label="Salvar" class="p-button-success mr-2" />
      <Button @click="close" label="Cancelar" class="p-button-danger ml-2" />
    </div>
  </Dialog>
</template>

<script>
import { api } from "../../../api/index.js";
export default {
  name: "dialogCadastroUsuario",
  data() {
    return {
      display: false,
      itens: "",
      selectedItens: [],
      companys: "",
      form: {
        name: "",
        company_id: "",
      },
    };
  },
  methods: {
    async listarItens() {
      const { data } = await api.get("/itens");
      this.itens = data.map((iten) => iten.name);
    },
    async listarEmpresas() {
      const { data } = await api.get("/company");
      this.companys = data;
    },
    async salvar() {
      try {
        await api.post("/post", {
          name: this.form.name,
          company_id: this.form.company_id,
          itens_id: this.selectedItens,
        });
        this.$toast.add({
          severity: "success",
          summary: "Info Message",
          detail: "Message Content",
          life: 3000,
        });
      } catch (error) {
        console.log(error);
        this.$toast.add({
          severity: "error",
          summary: "Ocorreu um erro",
          detail: "Não foi possível buscar os pânicos",
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
  async mounted() {
    await this.listarItens();
    await this.listarEmpresas();
  },
};
</script>
