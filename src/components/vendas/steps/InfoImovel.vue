<template>
    <div>
      <div>
        <span class="md-title">Imovel</span>
        <p></p>
      </div>
      <div>
        <div>
          <md-autocomplete v-model="value" :md-options="empreendimentos" @md-changed="getEmpreendimentos" @md-opened="getEmpreendimentos">
            <label>Residencial</label>
            <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.name }}</template>
          </md-autocomplete>
        </div>
        <div>

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'AutocompleteAsync',
    data: () => ({
      value: null,
      listaEmpreendimentos : [
        {
          id: 1,
          name: 'Residencial Parque do Lago'
        },
        {
          id: 2,
          name: 'Condominio Santa Regina Londrina 1'
        },
        {
          id: 3,
          name: 'Condominio Santa Regina Londrina 2'
        },
        {
          id: 4,
          name: 'Condominio Araucaria'
        }
      ],
      empreendimentos: []
    }),

    methods: {
      getEmpreendimentos(searchTerm) {
        this.empreendimentos = new Promise(resolve => {
          window.setTimeout(() => {
            if (!searchTerm) {
              resolve(this.listaEmpreendimentos)
            } else {
              const term = searchTerm.toLowerCase()

              resolve(this.listaEmpreendimentos.filter(({name}) => name.toLowerCase().includes(term)))
            }
          }, 500)
        })
      }
    }
  }
</script>

<style scoped>

</style>
