<template>
  <div class="flex flex-row flex-wrap flex justify-content-center">
    <div class="mt-5">
      <Button
        @click="showDialogCadastroItem"
        label="Cadastro de equipamento"
        class="p-button-success m-4"
      />
      <Button
        @click="showDialogCadastroPostoServico"
        label="Cadastrar posto de serviço"
        class="p-button-success m-4"
      />
      <Button
        @click="showDialogCadastroUsuario"
        label="Cadastrar usuário"
        class="p-button-success m-4"
      />
      <Button
        @click="showDialogCadastroEmpresa"
        label="Cadastrar empresa"
        class="p-button-success m-4"
      />
    </div>
  </div>
  <DialogCadastroItem ref="dialogCadastroItem" />
  <DialogCadastroPostoServico ref="dialogCadastroPostoServico" />
  <DialogCadastroUsuario ref="dialogCadastroUsuario" />
  <DialogCadastroEmpresa ref="dialogCadastroEmpresa" />
</template>

<script>
import DialogCadastroItem from "./components/DialogCadastroItem.vue";
import DialogCadastroPostoServico from "./components/DialogCadastroPostoServico.vue";
import DialogCadastroEmpresa from "./components/DialogCadastroEmpresa.vue";
import DialogCadastroUsuario from "./components/DialogCadastroUsuario.vue";

export default {
  components: {
    DialogCadastroItem,
    DialogCadastroPostoServico,
    DialogCadastroEmpresa,
    DialogCadastroUsuario,
  },
  data() {
    return {};
  },
  methods: {
    showDialogCadastroItem() {
      this.$refs.dialogCadastroItem.open();
    },
    showDialogCadastroPostoServico() {
      this.$refs.dialogCadastroPostoServico.open();
    },
    showDialogCadastroUsuario() {
      this.$refs.dialogCadastroUsuario.open();
    },
    showDialogCadastroEmpresa() {
      this.$refs.dialogCadastroEmpresa.open();
    },
  },
};
</script>
