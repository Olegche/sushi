<template>
  <div>
    <div
      v-for="product in myProducts"
      :key="product.id"
      class="productListEdit"
    >
      id:
      <div>
        {{ product.id }}
      </div>
      <div>
        {{ product.title }}
      </div>

      <div>{{ product.price }} uah</div>
      <div>
        {{ product.category }}
      </div>
      <div>vegan: {{ product.isVegan }}</div>
      <div>calories: {{ product.calories }}</div>

      <img :src="product.img" alt="product.title" />
      <div>
        <button class="editButton" @click="onEdit(product.id)">edit</button>
        
        <button class="delButton" @click="deleteFromBase(product.id)">delete</button>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditProductForm",

  computed: {
    ...mapGetters(["myProducts"]),
  },

  data() {
      return {
          confirmDeleteShow: false
      }
  },

  methods: {
    ...mapActions(["deleteProduct"]),

    onEdit(id) {
      this.$router.push({
        name: "addProductForms",
        params: { product_id: id },
      });
    },

    deleteFromBase(productId) {
        this.deleteProduct(productId)
    }
  },
showDeleteForm() {
    this.confirmDeleteShow = true
}

};
</script>

<style lang="css" scoped>
.productListEdit {
  display: inline-block;
  width: 270px;
  padding: 10px;
  height: 370px;
  background-color: rgb(255, 255, 255);
  margin: 3px;
  text-align: center;
  box-shadow: 0 0 10px rgba(150, 126, 126, 0.5);
  border-radius: 10px;
}
.productListEdit img {
  margin: 2px;
  width: 90px;
  height: 100px;
}
.productListEdit button {
  background-color: goldenrod;
  border-radius: 7px;
  color: mintcream;
  font-size: 17px;
  border-width: 0px;
  cursor: pointer;
  margin: 3px;
}
.editButton:hover{
background-color:  rgb(250, 227, 99);
color: darkgreen
}

.delButton:hover{
background-color:  rgb(255, 97, 97);
color: rgb(245, 247, 229)
}
</style>