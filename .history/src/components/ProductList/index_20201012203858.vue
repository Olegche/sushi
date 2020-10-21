<template>
    <div>

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