<template>
  <div>
    <div class="emptyCartShow"
         v-if="getMyStoreCartLength < 1">

      <h1  >
        В корзині пусто! <br />
        Поверніться на головну і замовте смачні суші!
      </h1>
      <img src="@/assets/images/emptyCartImage.gif" alt="">

    </div>
    <span class="cartLength">
      в кошику {{ getMyStoreCartLength }} товарів
    </span>
    <span class="container">
      <table v-if="getMyStoreCartLength > 0" class="table">
        <tr>
          <th>Номер</th>
          <th>Кількість</th>
          <th>Назва</th>
          <th>Зображення</th>
          <th>Калорії</th>
          <th>Ціна</th>
          <th></th>
        </tr>
        <tr v-for="(product, index) in getMyStoreCart" :key="product.id">
          <td>
            {{ index + 1 }}
          </td>
          <td>
            <span @click="addProduct(product.id)"> + </span>
            {{ product.count }}
            <span @click="minusProduct(product.id)"> - </span>
          </td>

          <td>
            {{ product.title }}
          </td>
          <td>
            <img :src="product.img" alt="product.title" class="cart-image" />
          </td>

          <td>{{ product.calories }} ККАЛ</td>

          <td>{{ product.price }} гривень</td>

          <td>
            <button
              class="btnRemoveProductFromCart"
              @click="deleteFromCart(index)"
            >
              Х
            </button>
          </td>
        </tr>
        <tr class="totalPriceAndCalories">
          <td class="totalPriceAndCalories">всього</td>
          <td>{{ getMyStoreCartLength }} шт</td>
          <td></td>
          <td></td>
          <td>{{ getTotalCalories }} ККАЛ</td>
          <td>{{ getTotalPrice }} гривень</td>
          <td>
            <button>замовити</button>
          </td>
        </tr>
      </table>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",

  components: {},

  computed: {
    ...mapGetters(["getMyStoreCartLength", "getMyStoreCart"]),

    getTotalPrice() {
      let res = [];
      for (let product of this.getMyStoreCart) {
        res.push(product.price * product.count);
      }
      res = res.reduce((a, b) => a + b);
      return res;
    },

    getTotalCalories() {
      let res = [];
      for (let product of this.getMyStoreCart) {
        res.push(product.calories * product.count);
      }
      res = res.reduce((a, b) => a + b);
      return res;
    },
  },

  methods: {
    ...mapActions(["removeFromCart", "addToMyStoreCart", "decrementCart"]),

    deleteFromCart(index) {
      this.removeFromCart(index);
    },

    addProduct(id) {
      this.addToMyStoreCart(id);
    },

    minusProduct(id) {
      this.decrementCart(id);
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  padding: 100px;
}
table {
  margin: 100px auto;
  border-radius: 3px;
  text-align: center;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.table td {
  border: 2px solid rgb(206, 202, 202);
  font-size: 20px;
}

.table td span {
  cursor: pointer;
  font-size: 30px;
  margin: 10px;
  font-family: cursive;
  color: mediumseagreen;
}
.totalPriceAndCalories {
  color: rgb(255, 255, 255);
  font-size: 22px;
  background-color: mediumseagreen;
}

.cart-image {
  margin: auto;
  width: 70px;
  height: 65px;
}
.btnRemoveProductFromCart {
  background-color: rgb(223, 181, 173);
  color: rgb(255, 255, 255);
  border: 0px;
  border-radius: 30px;
  font-size: 20px;
  transition-duration: 1000ms;
}

.btnRemoveProductFromCart:hover {
  background-color: rgb(255, 0, 0);
  transform: scale(1.1) rotate(1turn);
  cursor: pointer;
}
.cartLength {
  margin: 20px;
  font-size: 20px;
  color: forestgreen;
  float: right;
  padding: 3px;
  box-shadow: 0 0 10px rgba(56, 95, 81, 0.5);
  border-radius: 7px;
}
.emptyCartShow {
  margin: 100px auto;
  text-align: center;
  font-size: 30px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: rgb(255, 217, 0);
  color: rgb(32, 26, 26);
  max-width: 50%;
  border-radius: 20px;
opacity:0; 
transition: 1s; 
animation: show 3s 1; 
animation-fill-mode: forwards; 
animation-delay: 0.5ms; 
}
@keyframes show{
0%{
opacity:0;
}
100% {
opacity:1;
}
}
</style>