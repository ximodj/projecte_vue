<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <!-- Envolver la hamburguesa con router-link -->
        <router-link to="/menu" class="menu-link">
          <v-icon @click.stop="toggleDrawer">mdi-menu</v-icon>
        </router-link>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-filter</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
      </v-app-bar>

      <!-- Enlazar el cajón de navegación al icono de hamburguesa -->
      <v-navigation-drawer v-model="drawer" temporary>
        <router-link to="/">Home</router-link>
        <router-link to="/Productes">Productes</router-link>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),

  methods: {
    // Método para alternar el estado del cajón de navegación
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.menu-link {
  text-decoration: none; /* Quitamos la decoración de texto */
  color: inherit; /* Usamos el color del texto por defecto */
  display: flex; /* Hacemos que el enlace sea un contenedor flexible */
  align-items: center; /* Centramos verticalmente el contenido */
  cursor: pointer; /* Cambiamos el cursor al pasar por encima */
}
.menu-link .v-icon {
  font-size: 24px; /* Ajustamos el tamaño del icono */
  margin-right: 8px; /* Añadimos un espacio a la derecha del icono */
}
</style>


