<template>
  <div class="md-layout-item">
    <md-field>
      <label>{{ name }}</label>
      <md-input :name="name" :id=" name" :type="type" md-autogrow></md-input>
    </md-field>
  </div>
</template>

<script>
    export default {

      props: {
        name: {
          required: true,
          type: String
        },

        type: {
          required:true,
          type: String
        },

        errorMessage: {
          required: false,
          type: Array
        },

        maxLenght: {
          required: false,
          type: Number
        },

        minLenght: {
          required: false,
          type: Number
        }
      }
    }
</script>

<style lang="scss" scoped>


</style>
