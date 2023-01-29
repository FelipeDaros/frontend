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
        <h6>Informe o nome</h6>
        <InputText type="text" v-model="form.name" />
      </div>
      <div class="mt-4">
        <h6>Informe a senha</h6>
        <InputText type="text" v-model="form.password" />
      </div>
      <div class="mt-4">
        <h6>Informe o email</h6>
        <InputText type="text" v-model="form.email" />
      </div>
      <div class="mt-4">
        <h6>Selecione o posto de serviço</h6>
        <select v-model="post_id" class="w-25 mt-2">
          <option v-for="option in posts" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="mt-4">
      <Button @click="enviarFormulario" label="Salvar" class="p-button-success mr-2" />
      <Button @click="close" label="Cancelar" class="p-button-danger ml-2" />
    </div>
  </Dialog>
</template>

<script>
import { api } from '../../../api';
  export default {
    name: 'dialogCadastroUsuario',
    data() {
      return {
        display: false,
        posts: '',
        post_id: '',
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
          this.form.post_id = this.post_id;
          await api.post('/users', this.form);
          this.$toast.add({severity:'success', summary: 'Informação sobre o cadastro de usuário', detail: 'Usuário cadastrado com sucesso!'});
          this.close();
          this.form = '';
        } catch (error) {
          this.$toast.add({severity:'error', summary: 'Informação sobre o cadastro de usuário', detail: `${error.response.data.error}`});
        }
      },
      open(){
        this.display = true;
      },
      close(){
        this.display = false;
      }
    },
    async mounted(){
        const {data} = await api.get('/post');
        this.posts = data;
    }
  }
</script>