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
  export default {
    data() {
      return {
        display: false
      }
    },
    methods: {
      open(){
        this.display = true;
      },
      close(){
        this.display = false;
      }
    }
  }
</script>