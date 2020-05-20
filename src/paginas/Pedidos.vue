<template>
  <div>
    <navbar></navbar>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template v-slot:cell(mostrar_pedido)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Esconder' : 'Mostrar'}}  Pedido
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        
      </template>

      <!-- <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Produto</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

        </b-card>
      </template>  -->
        
        <template v-slot:row-details="row" >
            <table id="example-1">
                <tr v-for="item in items" :key="item.Produto">
                    {{ row.item.Produto }}
                </tr>
                <tr v-for="item in items" :key="item.Quantidade">
                    {{ row.item.Quantidade }}
                </tr>

            </table>
        </template>



    </b-table>
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
        fields: ['Pedido ID', '', 'mostrar_pedido'],
        items: [
          { Produto: 12, Quantidade: 15},
          { Produto: 156,Quantidade: 15213 },
          
        ]
      }
    }
  }
</script>