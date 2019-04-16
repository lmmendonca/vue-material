<template>
  <div>
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">Cadastro de Venda</h3>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>

    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="1" md-label="Informações do Cliente" :md-done.sync="first">
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
              <hbt-form name="Data de Nascimento" type="Date"></hbt-form>
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
                  <md-select  name="estadoCivil" id="estadoCivil">
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


        </div>
        <md-button class="md-raised md-primary" @click="setDone('1', '2')">Continuar</md-button>
      </md-step>





      <md-step id="2" md-label="Informações do Imovel" :md-error="secondStepError" :md-done.sync="second">
        <md-button class="md-raised md-primary" @click="setDone('2','3')">Done</md-button>
      </md-step>

      <md-step id="3" md-label="Contrato" :md-done.sync="third">
        <md-button class="md-raised md-primary" @click="setDone('3','4')">Done</md-button>
      </md-step>

      <md-step id="4" md-label="Revisão" :md-done.sync="four">
        <md-button class="md-raised md-primary" @click="setDone('4')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import Cpf from "../shared/form/Cpf";
  import HabittenForm from "../shared/form/HabittenFormValidation";

  export default {

    name: "StepperLinear",
    data: () => ({
      active: "first",
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      radio: false,
      boolean: false
    }),

    components: {
      'hbt-cpf': Cpf,
      'hbt-form': HabittenForm
    },

    methods: {
      setDone(id, index) {
        this[id] = true;

        this.secondStepError = null;

        if (index) {
          this.active = index;
        }
      },
      setError() {
        this.secondStepError = "This is an error!";
      }
    }
  };
</script>

<style lang="scss" scoped>
  .md-steppers {
  }

  .left {
    margin-left: 20px;
  }
</style>
