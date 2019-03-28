<template>
  <md-card class="hbt-card">
    <md-card-content>
      <table class="table-card" width="100%" align="block">
        <tr>
          <th class="col-1"></th>
          <th class="col-2"></th>
          <th class="col-3"></th>
        </tr>
        <tr>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/cliente.png">
            <span>{{ nome }}</span>
          </td>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/pin.png">
            <span>{{ empreendimento }}</span>
          </td>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/status.png">
            <span>{{ status_negocio }}</span>
          </td>
        </tr>
        <tr>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/documento.png">
            <span>{{ cpf }}</span>
          </td>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/imovel.png">
            <span>{{ imovel }}</span>
          </td>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/data-compra.png">
            <span>{{ data_compra }}</span>
          </td>
        </tr>
      </table>
    </md-card-content>
  </md-card>
</template>

<script>
  export default {
    props: ['nome', 'cpf', 'empreendimento', 'imovel', 'status_negocio', 'data_compra']

  }
</script>

<style scoped>
  .hbt-card {
    margin-bottom: 13px;
  }

  .lin-1 {
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
