<template>
  <div class="container">
    <div class="search">
      шукай улюблені страви за назвою
      <input
        type="text"
        v-model="searchText"
        placeholder="philadelfia"
        class="input"
      />
    </div>

    <span class="goToCartAndLength"> <span @click="GoToCartBtn"> корзина </span>  {{ getMyStoreCartLength }} </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderSection",

  computed: {
    ...mapGetters(["getMyStoreCartLength"]),
  },

  data() {
    return {
      searchText: null,
    };
  },

  watch: {
    searchText(newValue) {
      this.$emit("title-filter", newValue);
    },
  },

  methods: {
    GoToCartBtn() {
      this.$router.push({ name: 'cart' })
      
    }
  },
};
</script>

<style lang="css" scoped>
.container {
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
.cart {
  margin: 10px;
  color: darksalmon;
  font-size: 25px;
}
.bntClean {
  border-radius: 7px;
  background-color: rgba(243, 54, 54, 0.837);
  color: lightgoldenrodyellow;
  border-color: rgba(245, 108, 108, 0.837);
  font-size: 20px;
  border-width: 0.1px;
}
.btnRemove {
  border-radius: 7px;
  background-color: rgba(250, 229, 72, 0.837);
  color: rgb(75, 78, 80);

  font-size: 20px;
  border-width: 0.1px;
}
.goToCartAndLength {
  font-size: 30px;
  cursor: pointer;
  color:mediumseagreen;
  
  
  


}
</style>