<template>
  <div>
    <md-toolbar class="md-primary md-elevation-1">

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
        <md-button class="md-raised md-primary" @click="setDone('1', '2')">Continue</md-button>
      </md-step>

      <md-step id="2" md-label="Second Step" :md-error="secondStepError" :md-done.sync="second">
        <span class="md-title">aaaa</span>
      </md-step>

      <md-step id="3" md-label="Third Step" :md-done.sync="third">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos
          sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
          nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos
          sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
          nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>

      <md-step id="4" md-label="Fourth Step" :md-done.sync="four">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos
          sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
          nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos
          sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
          nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('four')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'StepperLinear',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      radio: false,
      boolean: false

    }),
    methods: {
      setDone(id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError() {
        this.secondStepError = 'This is an error!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-steppers {

  }
</style>
