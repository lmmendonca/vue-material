<template>
  <div class="page-container">
    <md-app md-mode="fixed" class="md-primary">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Vendas</span>
          </div>

          <md-autocomplete
            class="search"
            md-layout="box"
            md-options="filtros">
            <label>Buscar...</label>
          </md-autocomplete>

          <div class="md-toolbar-section-end">
            <div class="separator">

              <md-avatar class="md-avatar-icon md-medium">L
              </md-avatar>
            </div>

          </div>
        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-primary toolbar-drawer" md-elevation="0">
          <span class="md-title">Sistema Habitten</span>
        </md-toolbar>

        <md-list v-for="rota in rotas" :key="rota.titulo">

          <router-link :to="rota.path">
            <md-list-item href="/">

              <md-icon>{{ rota.icon }}</md-icon>
              <span class="md-list-item-text">{{ rota.titulo }}</span>

            </md-list-item>
          </router-link>

        </md-list>

      </md-app-drawer>

      <md-app-content>
        <slot>
        </slot>
      </md-app-content>

    </md-app>
  </div>
</template>

<script>
  export default {

    data() {

      return {
        menuVisible: false,
      }
    },

    props: ['rotas', 'filtros']


  }
</script>

<style lang="scss" scoped>
  .search {
    max-width: 1200px;
  }

  .md-app {
    max-height: 100%;
  }

  * {
    --md-theme-default-primary: #34495e;
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);

  }

  .md-app-content {
    height: 100%;
  }

  .toolbar-drawer {
    --md-theme-default-accent: rgba(30, 87, 54, 0.55);;
    justify-content: center;

  }

  .logo-drawer {
    max-width: 60px;
    width: auto;
  }

  * {
    list-style: none;
  }

</style>
