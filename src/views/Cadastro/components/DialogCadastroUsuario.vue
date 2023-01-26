<template>
  <Dialog :visible="display" :modal="true" closable="false">
    Content
	<template #footer>
        <Button label="Sim" />
        <Button  @click="close" label="Não "></Button>
    </template>
</Dialog>
</template>

<script>
//import api from '../../../api/index';
  export default {
    name: 'dialogCadastroUsuario',
    data() {
      return {
        display: false,
        form: {
          name: '',
          email: '',
          password: '',
          post_id: ''
        }
      }
    },
    methods: {
      async enviarFormulario(){
        try {
          //await api.post('/users', this.form);
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
        this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        this.display = false;
      }
    },
  }
</script>