<template>
  <div>
    <br>
    <div class="emptyCartShow" v-if="getMyStoreCartLength < 1">
     
      <h1>
        В корзині пусто! <br />
        Поверніться на <a href="/">головну</a> і замовте смачні суші!
      </h1>
      <img src="@/assets/images/emptyCartImage.gif" alt="" />
    </div>

    <div v-if="isVisible" class="container">
      <div v-if="getMyStoreCartLength > 0">
        <div class="cartTitle">
          Корзина
          <img src="@/assets/images/welcomeCartTitle.gif" alt="" />
        </div>
        <table class="table">
          <tr>
            <th></th>
            <th>Кількість</th>
            <th>Назва</th>
            <th></th>
            <th>Калорії</th>
            <th>Ціна</th>
            <th></th>
          </tr>
          <tr v-for="(product, index) in getMyStoreCart" :key="product._id">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              <span @click="minusProduct(product._id)">-</span>
              {{ product.count }}
              <span @click="addProduct(product._id)">+</span>
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
              <b-button @click="GetOrder" type="is-warning" outlined
                >замовити</b-button
              >
            </td>
          </tr>
          <tr class="minOredr" v-if="getTotalPrice < 200">
            *мінімальне замовлення 200грн.
            <b-progress
              type="is-warning"
              :value="getTotalPrice"
              :max="200"
              show-value
              style="margin: 9px"
            >
              {{ getTotalPrice }}/200</b-progress
            >
          </tr>
          <tr></tr>
        </table>
        <div class="showResultUser" v-if="getUserIsCalculated">
          <p v-if="getUserSex === 'man'">оскільки ви мужній Чоловік</p>
          <p v-if="getUserSex === 'wooman'">оскільки ви Прекрасна жінка</p>
          вагою {{ getUserWeight }} кг і зростом {{ getUserHeight }} см віком в
          {{ getUserAge }} років - рекомендована норма ККАЛ на день становить
          <span class="DigsUserResult"> {{ getUserResultIs }} </span>
        </div>
        <div
          class="toMatchSushi"
          v-if="
            getUserIsCalculated && getTotalCalories > getUserResultIs + 1000
          "
        >
          <h1>
            {{ getTotalCalories }} ККАЛ Не забагато?
            <br />
            може оце все з'їсте на трьох?)
          </h1>

          <img src="@/assets/images/toMutchSushi.gif" alt="" />
        </div>
        <span class="mainDivCalculator">
          <calcu />
        </span>
      </div>

      <div></div>
    </div>

    <div class="orderField" v-if="isOrder">
      <b-field label="* Ім'я:">
        <b-input required v-model="userName"></b-input>
      </b-field>

      <b-field label="* Телефон">
        <b-input
          required
          v-model="tel"
          type="number"
          name="phone"
          placeholder="+380679587995"
          title="введіть номер"
          minlength="10"
          maxlength="13"
        >
        </b-input>
      </b-field>

      <b-field label="* Населений пункт:">
        <b-input required v-model="city"></b-input>
      </b-field>

      <b-field label="* Вулиця:">
        <b-input required v-model="street"></b-input>
      </b-field>

      <b-field label="* Будинок:">
        <b-input required v-model="house"></b-input>
      </b-field>

      <b-field label="Під'їзд:">
        <b-input v-model="entrance" type="number" :min="1" :max="20"></b-input>
      </b-field>

      <b-field label="Квартира:">
        <b-input v-model="flat" type="number" :min="1" :max="1000"></b-input>
      </b-field>

     

      <div>
        <b-checkbox
          v-model="dontRingTheDoor"
          size="is-middle"
          :value="false"
          type="is-danger"
        >
          Не дзвонити в двері!
        </b-checkbox>
        <br />
        <b-checkbox
          v-model="leftAtDoor"
          size="is-middle"
          :value="false"
          type="is-danger"
        >
          Залишити під дверями!
        </b-checkbox>
      </div>

      <div>
        <b-field
          label="Побажання до замовлення "
          
        >
          <b-input v-model="wishes" maxlength="200" type="textarea"></b-input>
        </b-field>
      </div>

      <b-button
        v-if="userName && tel && city && house && street"
        @click="acceptAll"
        type="is-success"
        size="is-large"
        outlined
        >Замовити</b-button
      >
    </div>
    <div class="acceptCard" v-if="accept">
            <img  class="salut" src="@/assets/images/salut.gif" alt="" />

      <table>
        <tr>
          <th></th>
          <th>Замовлення прийняте !</th>
          
        </tr>
        <tr>
          <th>Ім'я</th>
          <td>{{ userName }}</td>
        </tr>
        <tr>
          <th>тел</th>
          <td>{{ tel }}</td>
        </tr>
        <tr>
          <th>місто</th>
          <td>{{ city }}</td>
        </tr>

        <tr>
          <th>вулиця</th>
          <td>{{ street }}</td>
        </tr>

        <tr>
          <th>будинок</th>
          <td>{{ house }}</td>
        </tr>
        <tr>
          <th>під'їзд</th>
          <td>{{ entrance }}</td>
        </tr>
        <tr>
          <th>кв</th>
          <td>{{ flat }}</td>
        </tr>
        <tr>
          <th>не дзвонити в двері?</th>
          <td>{{ dontRingTheDoor }}</td>
        </tr>
        <tr>
          <th>залишити під дверима?</th>
          <td>{{ leftAtDoor }}</td>
        </tr>
        <tr>
          <th>кометарі</th>
          <td>
            {{ wishes }}
          </td>
        </tr>

        <tr v-for="product in getMyStoreCart" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.count }} шт./ціна {{ product.price }}</td>
        </tr>
        <tr>
          <td>замовлено в</td>
          <td>{{new Date()}}</td>
        </tr>
        

        <tr>
          <th>всього</th>
          <th class="total-order-price">{{ getTotalPrice }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Calcu from "../../components/Shop/components/Calcu";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",

  components: {
    Calcu,
  },

  computed: {
    ...mapGetters([
      "getMyStoreCartLength",
      "getMyStoreCart",
      "getUserSex",
      "getUserWeight",
      "getUserHeight",
      "getUserAge",
      "getUserResultIs",
      "getUserIsCalculated",
    ]),

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

    getOrderedProducts() {   
        let products = [];
        for (let product of this.getMyStoreCart) {
          products.push(`назва: ${product.title} кількість: ${product.count} ціна за шт: ${product.price}` );
        }
        return products;
    },
  },

  data() {
    return {
      isVisible: true,
      isOrder: false,
      userName: "",
      tel: "",
      city: "",
      street: "",
      house: "",
      entrance: "",
      flat: "",
      dontRingTheDoor: false,
      leftAtDoor: false,
      wishes: "",
      accept: false,
      
      
    };
  },

  methods: {
    ...mapActions(["removeFromCart", "addToMyStoreCart", "decrementCart"]),
    ...mapActions('orders', ["addOrder"]),

    deleteFromCart(index) {
      this.removeFromCart(index);
    },

    addProduct(_id) {
      console.log("111111111111");
      this.addToMyStoreCart(_id);
    },

    minusProduct(_id) {
      this.decrementCart(_id);
    },

    GetOrder() {
      if (this.getTotalPrice >= 200) {
        this.isOrder = true;
        this.isVisible = false;
      }
    },

    acceptAll() {
      this.addOrder({
       
      userName: this.userName,
      tel: this.tel,
      city: this.city,
      street: this.street,
      house:this.house,
      entrance: this.entrance,
      flat: this.flat,
      dontRingTheDoor: this.dontRingTheDoor,
      leftAtDoor: this.leftAtDoor,
      wishes: this.wishes,
      date: new Date(),
      products: this.getOrderedProducts,
      totalPrice: this.getTotalPrice,
      statusOrder: false
      
      })
      this.accept = true;
      this.isOrder = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  padding: 100px;
}
.cartTitle {
  font-size: 30px;
  text-align: center;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.5);

  max-width: 500px;
  max-height: 250px;
  margin-bottom: 20px;
  margin: auto;
  border-radius: 9px;
}

/* .cartTitle img {
 max-width: 300px;
 max-height: 150px;
} */

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
  padding: 1px;
  
}

.total-order-price {
  color: red;
}

.table td span {
  cursor: pointer;
  font-size: 30px;
  margin: 10px;
  font-family: cursive;
  color: rgb(35, 209, 96);
}
.totalPriceAndCalories {
  color: rgb(255, 255, 255);
  font-size: 22px;
  background-color: rgb(35, 209, 96);
}

.showResultUser {
  width: 270px;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  background-color: rgb(121, 87, 213);
  color: white;
}
.DigsUserResult {
  color: rgb(252, 206, 24);
  font-size: 20px;
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

.orderField {
  text-align: center;
  padding: 20px;
  max-width: 30%;
  margin: auto;
}

.minOredr {
  text-align: right;
  float: right;
  color: red;
}
.acceptCard {
  position: absolute;
  margin-left: 10%;
}
.acceptCard * {
  
  padding: 1px;
}
.acceptCard th {
  border: 2px solid rgb(206, 202, 202);
}

.acceptCard td {
  border: 2px solid rgb(206, 202, 202);
}

.mainDivCalculator {
  display: block;
  text-align: center;
  width: 162px;
  height: 100px;
  max-width: 200px;
  float: right;
  border-radius: 20px;
  padding: 9px;
  bottom: 300px;

  min-height: 30em;
}
.emptyCartShow {
  margin: 100px auto;
  text-align: center;
  font-size: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(255, 217, 0);
  color: rgb(32, 26, 26);
  max-width: 50%;
  border-radius: 20px;
  opacity: 0;
  transition: 1s;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 0.5ms;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.toMatchSushi {
  margin: 10px auto;
  text-align: center;
  font-size: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(255, 217, 0);
  color: rgb(32, 26, 26);
  max-width: 50%;
  border-radius: 20px;
  opacity: 0;
  transition: 1s;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 0.5ms;
}

@media screen and (max-width: 768px) {
  .toMatchSushi {
    display: block;
    padding: 10px;
    max-width: 1000px;
    margin: 10px auto;
    text-align: center;
    font-size: 20px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    background-color: rgb(137, 250, 99);
    color: rgb(32, 26, 26);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.salut{
  margin-left: 80%;
  position:absolute;
  border-radius: 0px
}
</style>