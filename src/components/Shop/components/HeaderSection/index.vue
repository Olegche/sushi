<template>
  <div class="container">
    <div class="search">
      Шукай улюблені страви за назвою:

      <input
        type="text"
        v-model="searchText"
        placeholder="philadelfia"
        class="input"
      />

    </div>
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
      this.$router.push({ name: "cart" });
    },
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
</style>