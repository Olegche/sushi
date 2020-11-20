<template>
  <div>
    <div class="mainDiv">
      <h1>Додати нові страви !</h1>
      <div>
        <label>
          Title
          <input type="text" v-model="title" />
        </label>
      </div>

      <div>
        <label>
          Price
          <input type="text" v-model="price" />
        </label>
      </div>

      <div>
        <label>
          Image
          <input type="text" v-model="img" />
        </label>
      </div>

      <div>
        Category

        <b-select v-model="category" placeholder="set category">
          <option v-for="cat in getCategoryList" :key="cat.id" :value="cat.id">
            {{ cat.title }}
          </option>
        </b-select>
      </div>

      <div>
        <label>
          Calories
          <input type="text" v-model="calories" />
        </label>
      </div>

      <b-checkbox v-model="isVegan" size="is-medium" type="is-success">
        is Vegan?
      </b-checkbox>

      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "addProductForm",

  computed: {
    ...mapGetters(["getCategoryList", "getProductById"]),

    productId() {
      if (this.$route.params.product_id === "new") return null;
      else return this.$route.params.product_id;
    },
  },

  data() {
    return {
      title: null,
      price: null,
      img: null,
      calories: null,
      category: null,
      isVegan: null,
    };
  },

  methods: {
    ...mapActions(["addProduct", "updateProduct"]),

    onAdd() {
      const { title, price, img, calories, category, isVegan } = this;
      //Крок 5. Використовуємо1 функцію-action
      if (!this.productId)
        this.addProduct({
          
          productData: {
            title,
            price,
            img,
            calories,
            category,
            isVegan,
          },
        });
      else
        this.updateProduct({
          
          productData: {
            id: this.productId,
            title,
            price,
            img,
            calories,
            category,
            isVegan,
          },
        });
    },
  },
   mounted() {
    if (this.productId) {
      const product = this.getProductById(this.productId)
      this.title = product.title
      this.price = product.price
      this.img = product.img
      this.category = product.category
      this.calories = product.calories
      this.isVegan = product.isVegan

    }
  },
};
</script>

<style lang="css" scoped>
.mainDiv {
  position: absolute;
  display: block;
  text-align: center;
  margin: auto 39%;
  margin-top: 100px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(150, 126, 126, 9.5);
  border-radius: 9px;
}
.mainDiv * {
  margin: 9px auto;
}
.mainDiv * :hover {
  color: goldenrod;
}
</style>