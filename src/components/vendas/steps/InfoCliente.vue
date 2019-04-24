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
      <div class="md-layout md-gutter md-alignment-center">
        <hbt-cpf></hbt-cpf>
        <hbt-form name="Nome" type="String"></hbt-form>
        <hbt-form name="Sobrenome" type="String"></hbt-form>
        <div class="md-layout-item">
          <md-field>
            <md-input name="data-nascimento" id="data-nascimento" type="Date" md-autogrow></md-input>
            <span class="md-helper-text">Data de Nascimento</span>
          </md-field>
        </div>
      </div>
    </div>


    <div>
      <div class="md-layout md-gutter md-alignment-center">
        <hbt-form name="RG" type="Number"></hbt-form>
        <hbt-form class="md-layout-item" name="Telefone" type="Number"></hbt-form>
        <hbt-form name="Email" type="Email"></hbt-form>
        <hbt-form name="Profissão" type="String"></hbt-form>
      </div>
    </div>


    <div>
      <div class="md-layout md-gutter md-alignment-left">
        <div class="md-layout-item md-size-25">
          <md-field>
            <label>Estado Civil</label>
            <md-select name="estadoCivil" id="estadoCivil">
              <md-option value="Solteiro">Solteiro</md-option>
              <md-option value="Casado">Casado</md-option>
              <md-option value="Separado judicialmente">Separado judicialmente</md-option>
              <md-option value="Divorciado">Divorciado</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>


    <p></p>


    <div>
      <span class="md-title">Endereço</span>
      <p></p>
    </div>


    <div>
      <div class="md-layout md-gutter md-alignment-center">
        <hbt-form name="CEP" type="Number"></hbt-form>
        <hbt-form name="Cidade" type="String"></hbt-form>
        <hbt-form name="Estado" type="String"></hbt-form>
        <hbt-form name="Rua/Avenida" type="String"></hbt-form>
      </div>
      <div class="md-layout md-gutter md-alignment-left">
        <hbt-form class="md-size-25" name="Bairro" type="String"></hbt-form>
        <hbt-form class="md-size-25" name="Complemento" type="String"></hbt-form>
      </div>
    </div>

  </div>
</template>

<script>
  import Cpf from "../../shared/form/Cpf";
  import HabittenForm from "../../shared/form/HabittenFormValidation";

  export default {

    name: "StepperLinear",
    data: () => ({
      radio: false,
      boolean: false
    }),

    components: {
      'hbt-cpf': Cpf,
      'hbt-form': HabittenForm
    }
  }
</script>

<style scoped>

</style>
