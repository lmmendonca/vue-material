<template>
  <div>
    <div>
      <span class="md-title">Dados da Pessoa</span>
      <p></p>
    </div>

    <span class="md-subhead">Tipo de pessoa:</span>
    <div class="separator">
      <md-radio v-model="radio" :value="false" class="md-small">Fisica</md-radio>
      <md-radio v-model="radio" :value="true" class="md-small">Juridica</md-radio>
    </div>
    <div>
      <md-switch v-model="boolean">Consultar Serasa</md-switch>
    </div>
    <div>
      <div class="separator">
        <md-field>
          <label>CPF</label>
          <md-input v-model="number" type="number" md-autogrow></md-input>
        </md-field>
        <md-field>
          <label>CPF</label>
          <md-input v-model="number" type="number" md-autogrow></md-input>
        </md-field>

      </div>
      <div class="separator">
        <md-field>
          <label>CPF</label>
          <md-input v-model="number" type="number" md-autogrow></md-input>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "InfoCliente"
    }
</script>

<style scoped>

</style>
