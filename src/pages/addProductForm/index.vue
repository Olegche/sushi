<template>
  <div >
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
      <label>
        Category
        <input type="text" v-model="category" />
      </label>
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
import { mapActions } from "vuex";
export default {
  name: "addProductForm",

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
    ...mapActions(["addProduct"]),

    onAdd() {
      const { title, price, img, calories, category, isVegan } = this;
      //Крок 5. Використовуємо1 функцію-action

      this.addProduct({
        self: this,
        productData: {
          title,
          price,
          img,
          calories,
          category,
          isVegan,
        },
      })
      this.title= null,
      this.price= null,
      this.img= null,
      this.calories= null,
      this.category= null,
      this.isVegan= null

      
    },
  },
};
</script>

<style lang="css" scoped>

.mainDiv{
    position: absolute;
    display: block;
    text-align: center;
    margin: auto 39% ;
    margin-top: 100px;
    padding: 30px;
    box-shadow: 0 0 10px rgba(150, 126, 126, 9.5); 
    border-radius: 9px;
}
.mainDiv * {
    margin: 9px auto;
    
}
.mainDiv  * :hover {
    color: goldenrod;
    
}
</style>