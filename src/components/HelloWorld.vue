<template>
  <v-layout row wrap>
   <v-flex xs12 sm6 offset-sm3
   v-for="(producto,index) in prod"
   >
   <v-hover>
     <v-card
     slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
     >
       <v-img
         :src="'data:image/jpeg;base64,'+producto.foto"
       ></v-img>

       <v-card-title primary-title>
         <div>
           <h3 class="headline mb-0" v-text="producto.nombre"></h3>
           <div><span v-text="producto.detalle"></span></div>
         </div>
       </v-card-title>

       <v-card-actions>
         <v-btn flat color="orange">Share</v-btn>
         <v-btn flat color="orange">Explore</v-btn>
       </v-card-actions>
     </v-card>
   </v-hover>
   </v-flex>
 </v-layout>
</template>

<script>
import Producto from '@/services/productosServices'
export default {
  name: 'HelloWorld',
  data () {
    return {
      prod : []
    }
  },
  async beforeMount() {
      const r = await Producto.list()
      this.prod = r.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
