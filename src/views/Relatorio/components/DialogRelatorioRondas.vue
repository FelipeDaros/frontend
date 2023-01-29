<template>
  <Dialog
    :visible="display"
    :modal="true"
    :closable="false"
    class="text-center"
    style="width: 40%"
  >
    <div>
      <h4>Relatório das rondas</h4>
      <span>Buscar todos as rondas</span>
      <div class="flex  justify-content-center">
        <Checkbox v-model="bucarTodos" :binary="true" class="m-1"/>
      </div>
      <div v-if="!bucarTodos">
        <span>Selecione o vigilante</span>
        <select v-model="user_id" class="w-25 m-2">
          <option v-for="option in users" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
      <div v-if="!bucarTodos">
        <span>Selecione a data</span>
        <Calendar v-model="dataInformada" class="w-25 m-2" dateFormat="dd.mm.yy"/>
      </div>
      <div v-if="!bucarTodos">
        <span>Deseja buscar o atrasados ?</span>
        <Checkbox v-model="checked" :binary="true" class="ml-2"/>
      </div>
    </div>
    <Button @click="gerarRelatorio" label="Gerar relatório" class="p-button-success m-4" />
    <Button @click="close" label="Fechar" class="p-button-danger m-4" />
  </Dialog>
</template>

<script>
import { api } from "../../../api/index.js";
export default {
  name: "dialogRelatorioRondas",
  data() {
    return {
      display: false,
      user_id: '',
      users: [],
      dataInformada: '',
      checked: false,
      bucarTodos: false
    };
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    async buscarUsers() {
      const { data } = await api.get("/users");
      this.users = data;
    },
    async gerarRelatorio(){
      this.bucarTodos = false;
    }
  },
  mounted() {
    this.buscarUsers();
  },
};
</script>
