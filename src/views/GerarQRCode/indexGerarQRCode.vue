<script>
export default {
  name: 'index-gerar-qr-code',
  data(){
    return{
      points: [
        {id: 1, name: 'pav 1'},
        {id: 2, name: 'pav 2'},
        {id: 3, name: 'pav 3'}
      ]
    }
  }
}
</script>

<template>
  <div class="flex justify-content-center">
    <DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
</DataTable>

    <!-- <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">IMPRIMIR</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="point in points" :key="point.id">
                <td>{{point.id}}</td>
                <td>{{point.name}}</td>
                <td>
                  <Button label="Secondary" severity="secondary" />
                </td>
              </tr>
            </tbody>
          </table> -->
  </div>
</template>