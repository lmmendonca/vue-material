<template>
  <div class="md-layout-item">
    <md-field>
      <label for="cpf">CPF</label>
      <md-input name="cpf" id="cpf" v-model="cpf" type="number" md-autogrow></md-input>
      <span class="md-error" v-if="!$v.form.cpf.required">O CPF Deve ser informado.</span>
      <span class="md-error" v-else-if="!$v.form.cpf.minLength || !$v.form.cpf.maxLength()">O CPF deve conter 11 caracteres.</span>
    </md-field>
  </div>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'

    export default {
      data: () => ({
      }),

      validations: {
          form: {
            cpf: {
              required,
              minLength: minLength(11),
              maxLength: maxLength(11)
            }
          }
      }
    }
</script>

<style scoped>

</style>
