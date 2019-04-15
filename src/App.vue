<template>
  <div>
    <hbt-layout :rotas="routes" :filtros="cards">
      <hbt-cadastro-venda>

      </hbt-cadastro-venda>
<!--      <li v-for="card of cards" :key="card.id">-->
<!--        <hbt-card :nome="card.nome" :cpf="card.cpf" :imovel="card.imovel" :empreendimento="card.empreendimento"-->
<!--                  status_negocio="APROVADO" :data_compra="card.data" @botaoAtivado="edicaoVenda(card.id)"></hbt-card>-->
<!--      </li>-->
    </hbt-layout>
  </div>
</template>

<script>
  import Card from './components/shared/card/Card';
  import Layout from './components/shared/layout/Layout';
  import Cadastro from './components/vendas/CadastroVenda'
  import {routes} from "./routes";

  export default {
    name: 'app',

    data() {
      return {
        menuVisible: false,
        routes,
        cards: []
      }
    },

    components: {
      'hbt-card': Card,
      'hbt-layout': Layout,
      'hbt-cadastro-venda': Cadastro
    },

    created() {
      this.$http.get('http://localhost:8080/vendas')
        .then(res => res.json())
        .then(cards => this.cards = cards, err => console.log(err))
    },

    methods: {
      edicaoVenda(cardId){
        alert("Edição não implementada.")
      }

    }

  }

</script>

<style lang="scss" scoped>

</style>
