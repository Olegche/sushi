<template>
    <div  class="container">
        <div class="search">
            
          шукай улюблені страви за назвою <input  type="text" v-model="searchText" placeholder="philadelfia" class="input">
          
       
        </div>
        <div  class="cart" v-if="productsInCart">
            Products in cart: {{productsInCart}}
             <button  @click="$emit('remove-last-one')" class="btnRemove">remove last one</button> <button @click="$emit('clear-cart')" class="bntClean">clean  cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderSection',

        props: {
            productsInCart: {
                type: Number,
                default: null
            },
        },

        data() {
            return {
                searchText: null
            }
        },

        watch: {
            searchText(newValue) {
                this.$emit('title-filter', newValue)
            }
        },
        methods: {
            clear() {
                this.productsInCart=0
                
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: flex;
    justify-content: space-between;
    

}

.search {
   
    font-size: 20px;
    margin: 10px;
}
.input {
    border-radius: 10px;
    width: 300px;
    height: 30px;
    color: darksalmon;
    border-color: darksalmon;
}
.cart{
    margin: 10px;
    color:darksalmon;
    font-size:25px;
    
    
    
    
}
.bntClean{
    border-radius: 7px;
    background-color: rgba(243, 54, 54, 0.837);
    color: lightgoldenrodyellow;
    border-color:  rgba(245, 108, 108, 0.837);
    font-size: 20px;
    border-width: 0.1px;
}
.btnRemove{
    border-radius: 7px;
    background-color: rgba(250, 229, 72, 0.837);
    color: rgb(75, 78, 80);
    
    font-size: 20px;
    border-width: 0.1px;
    
    

}
</style>