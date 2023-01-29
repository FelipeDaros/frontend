<template>
  <Dialog
    :visible="display"
    :modal="true"
    :closable="false"
    class="text-center"
    style="width: 40%"
  >

    <Button @click="close" label="Fechar" class="p-button-danger mt-2" />
  </Dialog>
</template>

<script>
// import { api } from "../../../api/index.js";
export default {
  name: "dialogRelatorioRondas",
  data() {
    return {
      display: false,
    };
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
  },
};
</script>
