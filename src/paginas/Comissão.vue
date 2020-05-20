<template>
  <div>
  <navbar></navbar>

  <h1> Produtos </h1>
  <div>
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
      
      

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

  data() {
      return {
        fields: ['Nome', 'CPF', 'Vendas', 'Valor_de_vendas', 'Comissão' ],
        items: [
          { Nome: 'João', CPF: '123.343.923-32', Vendas: '99', Valor_de_vendas:'214312,21', Comissão: '200'},
          { Nome: 'João', CPF: '123.343.923-32', Vendas: '99', Valor_de_vendas:'214312,21', Comissão: '200'},
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
