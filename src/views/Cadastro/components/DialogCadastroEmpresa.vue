<template>
  <Dialog :visible="display" :modal="true" closable="false">
    Content
	<template #footer>
        <h2>EMPRESA</h2>
        <Button  @click="enviarFormulario" label="Sim" />
        <Button  @click="close" label="Não "></Button>
    </template>
</Dialog>
</template>

<script>
import { api } from "../../../api/index.js";
  export default {
    name: 'dialogCadastroEmpresa',
    data() {
      return {
        display: false,
        form: {
          name: '',
          city: ''
        }
      }
    },
    methods: {
      async enviarFormulario(){
        try {
          await api.post('/company', this.form);
          this.$toast.add({severity:'success', summary: 'Informação sobre o cadastro de usuário', detail: 'Usuário cadastrado com sucesso!'});
          this.close();
        } catch (error) {
          this.$toast.add({severity:'error', summary: 'Informação sobre o cadastro de usuário', detail: `${error.response.data.message}`});
        }
      },
      open(){
        this.display = true;
      },
      close(){
        this.display = false;
      }
    }
  }
</script>