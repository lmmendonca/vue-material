<template>
  <md-card class="hbt-card">
    <md-card-content>
      <table class="table-card" style="width:100%">
        <tr>
          <th class="col-1"></th>
          <th class="col-2"></th>
          <th class="col-3"></th>
        </tr>
        <tr>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/cliente.png">
            {{ nome }}
          </td>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/pin.png">
            {{ empreendimento }}
          </td>
          <td class="lin-1">
            <img src="./../../../assets/icons/card/status.png">
            {{ status }}
          </td>
        </tr>
        <tr>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/documento.png">
            <span>{{ cpf }}</span>
          </td>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/imovel.png">
            {{ imovel }}
          </td>
          <td class="lin-2">
            <img src="./../../../assets/icons/card/data-compra.png">
            {{ data }}
          </td>
        </tr>
      </table>
    </md-card-content>
  </md-card>
</template>

<script>
    export default {
        props: ['nome', 'cpf', 'empreendimento', 'imovel', 'status', 'data']
    }
</script>

<style scoped>
  .hbt-card {
    margin-bottom: 13px;
  }

  .lin-1 {
    padding-bottom: 10px;
  }

  . {
    font-family: Roboto;
  }


</style>
