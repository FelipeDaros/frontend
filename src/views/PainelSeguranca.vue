<template>
  <main>
    <div class="flex flex-row flex-wrap flex justify-content-center">
      <div class="m-2 col-4">
        <h2 class="text-center">Pânico</h2>
        <DataTable :value="panico" responsiveLayout="scroll">
          <Column field="empresa" header="Empresa"></Column>
          <Column field="local" header="Local"></Column>
          <Column field="data" header="Data"></Column>
        </DataTable>
      </div>
      <div class="m-2 col-4">
        <h2 class="text-center">Últimas rondas</h2>
        <DataTable :value="products" responsiveLayout="scroll">
          <!-- <Column field="empresa" header="Empresa"></Column>
          <Column field="vigilante" header="vigilante"></Column> -->
          <Column field="created_at" header="Data"></Column>
        </DataTable>
      </div>
    </div>
  </main>
</template>


<script>
import { api } from "../api/index";

export default {
  data() {
    return {
      panico: '',
    };
  },
  methods: {
    async buscarPanicos(){
      try {
        const panicos = await this.api.get('/panic');
        this.panico = panicos.data;
        console.log(panicos.data);
      } catch (error) {
        console.log(error);
        this.$toast.add({severity:'error', summary: 'Ocorreu um erro', detail:'Não foi possível buscar os pânicos', life: 3000});
      }
    }
  },
  mounted() {
    this.buscarPanicos();
  },
};
</script>