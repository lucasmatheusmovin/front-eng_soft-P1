<template>
  <div>
  <navbar></navbar>

  <h1> Produtos </h1>
  <div>
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
      <template v-slot:cell(adicionar)="row">
        <b-button size="sm" @click="row.adicionar" class="mr-2">
           Adicionar
        </b-button>
      </template> 
      <template v-slot:cell(Quantidade)="row">
       <b-form-input @click="row.field"  placeholder="Quantidade"></b-form-input>
      </template> 

    </b-table>
  </div>
  
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components:{
    Navbar
  },

  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
  },
  data() {
      return {
        fields: ['Nome', 'Descrição', 'Preço', 'Quantidade em Estoque', 'Quantidade', 'adicionar', ],
        items: [
          { Nome: 'Prego', Descrição: 'Prego de pregar', Preço: '2,99',},
          { Nome: 'Madeira', Descrição: 'MDF', Preço: '22,99'},
          { Nome: 'Prego', Descrição: 'Prego de pregar', Preço: '2,99'},
        ]
      }
    },


    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'awesome') return 'table-success'
      }
    }

}
</script>

<style>

</style>
