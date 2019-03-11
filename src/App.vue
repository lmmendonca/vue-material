<template>
  <div class="page-container">
    <md-app md-mode="fixed" class="md-primary">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Sistema Habitten</span>
        <md-field class="filtro">
          <label class="filtro-buscar">Buscar</label>
          <md-input v-model="type"></md-input>
        </md-field>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-accent toolbar-drawer" md-elevation="0"><img
          src="assets/images/logo/habitten-logo.png" class="logo-drawer"></md-toolbar>

        <md-list v-for="rota in routes" :key="rota.titulo">
          <md-list-item href="/">
            <md-icon>{{ rota.icon }}</md-icon>
            <span class="md-list-item-text">{{ rota.titulo }}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEANDRO ALBERTOSR" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="GUSTAVO GUSTAVOSS  " cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>
        <hbt-card nome="LEONARDO MAXIMINO" cpf="086.620.409.18" imovel="LOTE 1 QUADRA 2" empreendimento="RESIDENCIAL PARQUE DO LAGO" status_negocio="APROVADO" data_compra="25/02/2019"></hbt-card>

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import Card from './components/shared/card/Card';
  import {routes} from "./routes";

  export default {
    name: 'app',

    data() {
      return {
        menuVisible: false,
        routes
      }
    },

    components: {
      'hbt-card': Card
    }

  }
</script>

<style lang="scss" scoped>
  .md-app {
    max-height: 100%;
    --md-theme-default-primary: rgba(30, 87, 54, 0.51);
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

</style>
