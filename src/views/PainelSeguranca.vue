<template>
  <main>
    <div class="flex flex-row flex-wrap flex justify-content-center">
      <div class="m-2 col-4">
        <h5 class="text-center">Pânico</h5>
        <div class="card">
          <DataTable
            :value="panico"
            :scrollable="true"
            scrollHeight="600px"
            :loading="loading"
            
          >
            <Column
              field="name"
              header="Nome"
              style="min-width: 200px "
            ></Column>
            <Column
              field="verify"
              header="Verificado"
              style="min-width: 200px"
            ></Column>
            <Column
              field="created_at"
              header="Data"
              style="min-width: 200px"
            ></Column>
          </DataTable>
        </div>
      </div>
      <div class="m-2 col-4">
        <h5 class="text-center">Ronda</h5>
        <div class="card">
          <DataTable
            :value="round"
            :scrollable="true"
            scrollHeight="600px"
            :loading="loading"
          >
            <Column
              field="id"
              header="ID"
              style="min-width: 200px"
            ></Column>
            <Column
              field="name"
              header="Nome"
              style="min-width: 200px"
            ></Column>
            <Column
              field="user_id"
              header="Usuario"
              style="min-width: 200px"
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { api } from "../api/index";

export default {
  data() {
    return {
      panico: "",
      round: "",
    };
  },
  methods: {
    async buscarPanicos() {
      try {
        const panicos = await api.get("/panic");
        this.panico = panicos.data;
        console.log(panicos.data);
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Ocorreu um erro",
          detail: "Não foi possível buscar os pânicos",
          life: 3000,
        });
      }
    },
    async buscarRondas() {
      try {
        const { data } = await api.get("/round");
        this.round = data;
      } catch (error) {
        console.log(error);
        this.$toast.add({
          severity: "error",
          summary: "Ocorreu um erro",
          detail: "Não foi possível buscar as roundas",
          life: 3000,
        });
      }
    },
  },
  mounted() {
    this.buscarPanicos();
    this.buscarRondas();
  },
  watch: {
    panico: {
      handler() {
        setTimeout(() => {
          this.buscarPanicos();
        }, 10000);
      },
      deep: true,
    },
    round: {
      handler() {
        setTimeout(() => {
          this.buscarRondas();
        }, 10000);
      },
      deep: true,
    },
  },
};
</script>
