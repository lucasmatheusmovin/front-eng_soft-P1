<template>
  <div>
  <navbar></navbar>

  <h1> Produtos </h1>
  <div>
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass">
      <template v-slot:cell(adicionar)="row">
        <b-button v-on:click.prevent="adicionarCarrinho(row.item.id, row.item.quantidade)" size="sm" @click="row.adicionar" class="mr-2">
           Adicionar
        </b-button>
      </template> 
      <template v-slot:cell(Quantidade)="row">
        <b-form-input v-model="row.item.quantidade" placeholder="Quantidade"></b-form-input>
      </template> 
    </b-table>
  </div>
  <div>
    <b-table :items="sacola.item" :tbody-tr-class="rowClass">
    </b-table>
  </div>

  <button v-on:click.prevent="getProducts">Atualizar</button>
  <br>
  <h3>CPF</h3>
  <b-form-input v-model="cpf" ></b-form-input>
  <h3>Nome</h3>
  <b-form-input v-model="nome" ></b-form-input>
  <h3>Telefone</h3>
  <b-form-input v-model="telefone" ></b-form-input>
  <br>
  <button v-on:click.prevent="finalizar">Finalizar Pedido</button>
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
        telefone: '',
        nome: '',
        cpf: '',
        fields: ['id', 'descricao', 'categoria', 'preco','Quantidade', 'adicionar' ,],
        items: [],
        sacola: []
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

      adicionarCarrinho(item, quantidade){
        
        this.sacola.push({Item: {id:item},Quantidade:quantidade})
        console.log(this.sacola);
      },

      finalizar(){
        let clientes = {CPF: this.cpf, Nome: this.nome, Telefone: this.telefone}
        let request = {Itens: this.sacola, Usuario:{Id: 1}, Cliente: clientes, Pagamento:{Id: 1}, Encomenda: false, Data:Date.now() }
        this.$http.post('http://localhost:5000/api/clientes', clientes)
        this.$http.post('http://localhost:5000/api/Vendas', request)
      }

    }

}
</script>

<style>

</style>
