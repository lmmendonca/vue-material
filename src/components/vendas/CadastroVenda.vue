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
        <div id="dados-cliente">
          <info-cliente id="info-cliente"></info-cliente>
        </div>

        <div class="md-layout">
          <md-button class="md-small md-fixed" @click="addCliente()">
            <md-icon>add</md-icon>
            <span>Adicionar Cliente</span>
          </md-button>
        </div>

        <div class="md-layout">
          <md-button class="md-raised md-primary" @click="setDone('1', '2')">Continuar</md-button>
        </div>
      </md-step>

      <md-step id="2" md-label="Informações do Imovel" :md-error="secondStepError" :md-done.sync="second">
        <div>
          <info-imovel>

          </info-imovel>
        </div>
        <md-button class="md-raised md-accent" @click="retorna('2','1')">Voltar</md-button>
        <md-button class="md-raised md-primary" @click="setDone('2','3')">Continuar</md-button>
      </md-step>

      <md-step id="3" md-label="Contrato" :md-done.sync="third">
        <div>
          <contrato>

          </contrato>
        </div>
        <md-button class="md-raised md-accent" @click="retorna('3','2')">Voltar</md-button>
        <md-button class="md-raised md-primary" @click="setDone('3','4')">Continuar</md-button>
      </md-step>

      <md-step id="4" md-label="Revisão" :md-done.sync="four">
        <div>
          <revisao>
          </revisao>
        </div>
        <md-button class="md-raised md-accent" @click="retorna('4','3')">Voltar</md-button>
        <md-button class="md-raised md-primary" @click="setDone('4')">Concluir</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import InfoCliente from "./steps/InfoCliente"
  import InfoImovel from "./steps/InfoImovel"
  import Contrato from "./steps/Contrato"
  import Revisao from "./steps/Revisao"

  export default {

    name: "StepperLinear",
    data: () => ({
      active: "first",
      first: false,
      second: false,
      third: false,
      secondStepError: null,
    }),

    components: {
      'info-cliente': InfoCliente,
      'info-imovel': InfoImovel,
      'contrato': Contrato,
      'revisao': Revisao
    },

    methods: {
      setDone(id, index) {
        this[id] = true;

        this.secondStepError = null;

        if (index) {
          this.active = index;
        }
      },

      retorna(id, index){

        this[id] = false;

        if (index) {
          this.active = index;
        }
      },

      setError() {
        this.secondStepError = "This is an error!";
      },

      addCliente(){
        var clone = document.getElementById('info-cliente').cloneNode(true);
        var destino = document.getElementById('dados-cliente');

        destino.append(clone)
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
