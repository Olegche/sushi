<template>
    <div>
        <div v-if="!products">
            No items
        </div>
        <div v-if="products" class="container">
            <product v-for="item in products"  :key="item.id"
            :img="item.img"
            :title="item.title"
            :price="item.price"
            :calories="item.calories"
            :category="item.category"
            :isVegan="item.isVegan"
            @add-to-cart='$emit("add-to-cart")'
            />
        </div>
    </div>
</template>

<script>
import Product from "./Product";
    export default {
        name:"ProductList",

        components: {
            Product
        },

        props: {
            products: {
                type: Array,
                default: null
            },
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: inline-block;
    margin-bottom: 25px;
}
</style>