<template>
  <div class="container">
    <v-card class="custom-card" flat>
      <v-card-title class="d-flex align-center justify-center pe-2">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
        CERCAR TARGETES GRÀFIQUES
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
        ></v-text-field>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table v-model:search="search" :items="items">
        <template v-slot:header.stock>
          <div class="text-end">Stock</div>
        </template>
        <template v-slot:item.image="{ item }">
          <v-card class="my-2" elevation="2" rounded>
            <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                cover
            ></v-img>
          </v-card>
        </template>
        <template v-slot:item.rating="{ item }">
          <v-rating
              :model-value="item.rating"
              color="orange-darken-2"
              density="compact"
              size="small"
              readonly
          ></v-rating>
        </template>
        <template v-slot:item.stock="{ item }">
          <div class="text-end">
            <v-chip
                :color="item.stock ? 'green' : 'red'"
                :text="item.stock ? 'En stock' : 'Sense stock'"
                class="text-uppercase"
                size="small"
                label
            ></v-chip>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      items: [
        {
          nom: "Nebula GTX 3080",
          image: "1.png",
          preu: 699.99,
          rating: 5,
          stock: true,
        },
        {
          nom: "Galaxy RTX 3080",
          image: "2.png",
          preu: 799.99,
          rating: 4,
          stock: false,
        },
        {
          nom: "Orion RX 6800 XT",
          image: "3.png",
          preu: 649.99,
          rating: 3,
          stock: true,
        },
        {
          nom: "Vortex RTX 3090",
          image: "4.png",
          preu: 1499.99,
          rating: 4,
          stock: true,
        },
        {
          nom: "Cosmos GTX 1660 Super",
          image: "5.png",
          preu: 299.99,
          rating: 4,
          stock: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Centra verticalmente en la pantalla */
  background-color: #f7f7f7; /* Color de fondo blanco */
}

.custom-card {
  padding: 20px;
  width: 100%;
  max-width: 700px; /* Ajusta el ancho máximo según tus necesidades */
}

/* Estilos para dispositivos móviles */
@media (max-width: 600px) {
  .custom-card {
    padding: 10px; /* Ajusta el relleno en dispositivos móviles */
    max-width: 100%; /* Ajusta el ancho máximo para dispositivos móviles */
  }
}
</style>




