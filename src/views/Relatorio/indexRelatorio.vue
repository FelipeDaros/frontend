<template>
  <div class="flex flex-row flex-wrap card-container justify-content-center mb-4  " style="margin-top: 5%;">
    <Card class="w-25 col-4 m-2">
      <template #header>
        <i class="pi pi-copy" style="font-size: 2rem"></i>
      </template>
      <template #title>Relatório das rondas</template>
      <template #content>
        Faça o relatório que precise para buscar as rondas efetuadas pelos
        vigilantes de acordo com a sua necessidade.
      </template>
      <template #footer>
        <Button
          @click="showDialogRelatorioRonda"
          label="Relatório das rondas"
          class="p-button-success m-4 h-100"
        />
      </template>
    </Card>
    <Card class="w-25 col-4 m-2">
      <template #header>
        <i class="pi pi-copy" style="font-size: 2rem"></i>
      </template>
      <template #title>Relatório de pânico</template>
      <template #content>
        Faça o relatório que precise para buscar os pânicos emetidos pelos vigilantes.
      </template>
      <template #footer>
        <Button
          @click="showDialogRelatorioRonda"
          label="Relatório das rondas"
          class="p-button-success m-4 h-100"
        />
      </template>
    </Card>
    <Card class="w-25 col-4 m-2">
      <template #header>
        <i class="pi pi-copy" style="font-size: 2rem"></i>
      </template>
      <template #title>Relatório dos postos</template>
      <template #content>
        Faça o relatório que precise para buscar os postos cadastrados.
      </template>
      <template #footer>
        <Button
          @click="showDialogRelatorioRonda"
          label="Relatório das rondas"
          class="p-button-success m-4 h-100"
        />
      </template>
    </Card>
  </div>
  <div class="flex flex-row flex-wrap card-container justify-content-center mb-4" style="margin-top: 5%;">
    <Card class="w-25 col-4 m-2">
      <template #header>
        <i class="pi pi-copy" style="font-size: 2rem"></i>
      </template>
      <template #title>Relatório das ocorrências</template>
      <template #content>
        Faça o relatório que precise para buscar as ocorrências.
      </template>
      <template #footer>
        <Button
          @click="showDialogRelatorioRonda"
          label="Relatório das rondas"
          class="p-button-success m-4 h-100"
        />
      </template>
    </Card>
    <Card class="w-25 col-4 m-2">
      <template #header>
        <i class="pi pi-copy" style="font-size: 2rem"></i>
      </template>
      <template #title>Relatório dos serviços</template>
      <template #content>
        Faça o relatório que precise para buscar os dias iniciados pelos vigilantes.
      </template>
      <template #footer>
        <Button
          @click="showDialogRelatorioRonda"
          label="Relatório das rondas"
          class="p-button-success m-4 h-100"
        />
      </template>
    </Card>
  </div>
  <DialogRelatorioRondas ref="dialogRelatorioRondas" />
</template>

<script>
import DialogRelatorioRondas from "./components/DialogRelatorioRondas.vue";
export default {
  components: {
    DialogRelatorioRondas,
  },
  data() {
    return {};
  },
  methods: {
    showDialogRelatorioRonda() {
      this.$refs.dialogRelatorioRondas.open();
    },
  },
};
</script>
