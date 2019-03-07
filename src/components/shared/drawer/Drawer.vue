<template>
  <md-app-drawer :md-active.sync="menuVisible">
    <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>attach_money</md-icon>
        <router-link :to class="md-list-item-text">Vendas</router-link>
      </md-list-item>

    </md-list>
  </md-app-drawer>
</template>

<script>
    export default {
      methods: {

      }
    }
</script>

<style scoped>

</style>
