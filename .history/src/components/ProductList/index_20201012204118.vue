<template>
    <div>
        <div v-if="!products">
            No items
        </div>
        <div v-if="products">
            <product v-for="item in products"  :key="item.id"
            :img="item.img"
            :title="item.title"
            :price="item.price"
            />
        </div>
    </div>
</template>

<script>
import Product from "@/components/Product";
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

<style lang="scss" scoped>

</style>