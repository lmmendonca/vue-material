<template>
  <md-card class="hbt-card md-clickable" @click="clicado()">
    <md-card-content>
      <div class="md-layout md-gutter md-alignment-center">

        <div class="md-layout-item md-medium-size-50 md-small-size-100">
          <div class="md-layout lin-1">
            <div class="md-layout-item">
              <img src="./../../../assets/icons/card/cliente.png">
              {{nome}}
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item">
              <img src="./../../../assets/icons/card/documento.png">
              {{cpf}}
            </div>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-25 md-small-size-100">
          <div class="md-layout lin-1">
            <div class="md-layout-item">
              <img src="./../../../assets/icons/card/pin.png">
              {{empreendimento}}
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <img src="./../../../assets/icons/card/imovel.png">
              {{imovel}}
            </div>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-25 md-small-size-100">
          <div class="md-layout">
            <div class="md-layout-item lin-1">
              <img src="./../../../assets/icons/card/status.png">
              {{status_negocio}}
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <img src="./../../../assets/icons/card/data-compra.png">
              {{data_compra}}
            </div>
          </div>
        </div>

      </div>
    </md-card-content>
  </md-card>
</template>

<script>
  export default {
    props: {
      nome: {
        required: true,
        type: String
      },

      cpf: {
        required: true,
        type: String
      },

      empreendimento: {
        required: false,
        type: String
      },

      imovel: {
        required: true,
        type: String
      },

      status_negocio: {
        required: false,
        type: String
      },

      data_compra: {
        required: false,
        type: String
      },

    },

    methods: {
      clicado() {
        this.$emit('clicado')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hbt-card {
    margin-bottom: 13px;
  }

  .lin-1, lin-2 {
    padding-bottom: 10px;
  }


  * {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 15px;
  }


</style>
