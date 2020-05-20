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
  <button v-on:click.prevent="getProducts">Login</button>
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
        fields: ['Nome', 'descricao as Nome', 'Preço', 'Quantidade em Estoque', 'Quantidade', 'adicionar', ],
        items: []
      }
    },
  
  mounted(){
    this.getProducts()
  },

    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'awesome') return 'table-success'
      },

        getProducts() {
        this.$http.get('http://localhost:5000/api/produtos')
            .then(request => (this.items = request.data))
            console.log(this.dataResponse)
        },
    }

}
</script>

<style>

</style>
