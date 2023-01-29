<template>
  <Dialog
    :visible="display"
    :modal="true"
    :closable="false"
    class="text-center"
    style="width: 40%"
  >
    <div>
      <h4>Relatório de Pânico</h4>
      <span>Buscar todos os pânicos</span>
      <div class="flex justify-content-center">
        <Checkbox v-model="bucarTodos" :binary="true" class="m-1" />
      </div>
    </div>
    <Button
      @click="gerarRelatorio"
      label="Gerar relatório"
      class="p-button-success m-4"
    />
    <Button @click="close" label="Fechar" class="p-button-danger m-4" />
  </Dialog>
</template>

<script>
import { api } from "../../../api/index.js";
export default {
  name: "dialogRelatorioPanico",
  data() {
    return {
      display: false,
      user_id: "",
      users: [],
    };
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    async buscarUsers() {},
    async gerarRelatorio() {},
  },
  mounted() {},
};
</script>
