<template>
  <div>
   
    <span> в кошику  {{ getMyStoreCartLength }} </span>
    <span class="container">
      
     <table v-if="getMyStoreCartLength > 0" class="table">
         <tr>
             <th>Номер</th>
             <th>Назва</th>
             <th> Зображення</th>
             <th>Ціна</th>
             <th>

             </th>
             
             
         </tr>
         <tr v-for="(product, index) in getMyStoreCart" :key="product.title">
             
             <td>
                 {{index + 1}}
             </td>
             <td>
                 {{product.title}}
             </td>
             <td>
          <img :src="product.img" alt="product.title" class="cart-image" />
             </td>
               
             <td>
                 {{product.price}}
             </td>
             
             <td>
                 <button @click="deleteFromCart(index)">delete</button>
             </td>
             
            
         </tr>
         <tr>
             <td>
                всього
             </td>
             <td>

             </td>
             <td>

             </td>
             <td>
                 {{getTotalPrice}}
             </td>
             
         </tr>
         
     </table>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",

  components: {
    
  },

  

  computed: {
    ...mapGetters(["getMyStoreCartLength", "getMyStoreCart"]),
    

    getTotalPrice() {
        let res = []
        for (let product of this.getMyStoreCart) {
            res.push(product.price)
        }
         res = res.reduce((a,b) => a + b)
        return res
    },

    

  
  },

  

  methods: {

      ...mapActions(['removeFromCart','addProductToMyStoreCart']),

      deleteFromCart(index) {

         this.removeFromCart(index)
      }

   

  
  }
};
</script>

<style lang="css" scoped>

.container{
    display: block
    
}
.table td{
    border: 2px solid salmon
}
.cart-image{
    margin-left: 30px;
    width: 30px;
    height: 25px;
}
</style>