<template>
  <md-app-drawer :md-active.sync="menuVisible">
    <md-toolbar class="md-primary toolbar-drawer" md-elevation="0">
      <span class="md-title">Sistema Habitten</span>
    </md-toolbar>

    <md-list v-for="rota in rotas" :key="rota.titulo">

      <md-list-item href="/">

        <md-icon>{{ rota.icon }}</md-icon>
        <span class="md-list-item-text">{{ rota.titulo }}</span>

      </md-list-item>

    </md-list>

  </md-app-drawer>
</template>

<script>
    export default {
      props: {

        menuVisible:{
          type: boolean,
          required: true
        },

        rotas: []

      }
    }
</script>

<style scoped>

</style>
