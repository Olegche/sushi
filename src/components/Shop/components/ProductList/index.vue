<template>
  <div>
    <div v-if="!products">No items</div>

    <div v-if="products">
      <product
        class="tile"
        v-for="item in products"
        :key="item._id"
        :_id="item._id"
        :img="item.img"
        :title="item.title"
        :price="item.price"
        :calories="item.calories"
        :category="item.category"
        :isVegan="item.isVegan"
      />
    </div>
    
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductList",

  components: {
    Product,
  },

  props: {
    products: {
      type: Array,
      default: null,
    },
  },
  
};
</script>

<style lang="css" scoped>
.container {
  display: inline-block;
  margin-bottom: 25px;
}

</style>