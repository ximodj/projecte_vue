<template>
  <v-app>
    <v-app-bar app color="blue lighten-4">
      <!-- Hamburguesa -->
      <div class="menu-icon" @click.stop="toggleDrawer">
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </div>

      <!-- Enlaces de navegación -->
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/Productes">Productes</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary color="blue lighten-4">
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Productes">
          <v-list-item-title>Productes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
.menu-icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 24px;
  margin-right: 12px; /* Espacio a la derecha de la hamburguesa */
}

.menu-line {
  width: 100%;
  height: 2px;
  background-color: #000; /* Color de las líneas de la hamburguesa */
}
</style>











