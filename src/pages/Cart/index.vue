<template>
  <div>
    <div class="emptyCartShow" v-if="getMyStoreCartLength < 1">
      <h1>
        В корзині пусто! <br />
        Поверніться на <a href="/">головну</a> і замовте смачні суші!
      </h1>
      <img src="@/assets/images/emptyCartImage.gif" alt="" />
    </div>

    <div v-if="isVisible" class="container">
      <div v-if="getMyStoreCartLength > 0">
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
          <tr v-for="(product, index) in getMyStoreCart" :key="product.id">
            <td>
              {{ index + 1 }}
            </td>
            <td>
              <span @click="minusProduct(product.id)">-</span>
              {{ product.count }}
              <span @click="addProduct(product.id)">+</span>
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
          </tr>
          <tr></tr>
        </table>
        <div v-if="getUserIsCalculated">
          <p v-if="getUserSex === 'man'">оскільки ви мужній Чоловік</p>
          <p v-if="getUserSex === 'wooman'">оскільки ви Прекрасна жінка</p>
          вагою {{ getUserWeight }} кг і зростом {{ getUserHeight }} см віком в
          {{ getUserAge }} років рекомендована норма ККАЛ на день становить
          {{ getUserResultIs }}

          <div class="toMatchSushi" v-if="getTotalCalories > getUserResultIs + 1000">
              <h1>
                  {{getTotalCalories}} ККАЛ  Не забагато? 
                   <br>
                    може оце все з'їсте на трьох?)
              </h1>
            
            <img src="@/assets/images/toMutchSushi.gif" alt="">
          </div>
        </div>
        <span class="mainDivCalculator">
          <calcu />
        </span>
      </div>

      <div></div>
    </div>

    <div class="orderField" v-if="isOrder">
      <b-field label="* Ім'я:">
        <b-input required v-model="costumerName"></b-input>
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
        <b-input v-model="entance" type="number" :min="1" :max="20"></b-input>
      </b-field>

      <b-field label="Квартира:">
        <b-input v-model="flat" type="number" :min="1" :max="1000"></b-input>
      </b-field>

      <div>
        <b-checkbox
          v-model="dontRingDore"
          size="is-middle"
          :value="false"
          type="is-danger"
        >
          Не дзвонити в двері!
        </b-checkbox>
        <br />
        <b-checkbox
          v-model="leaveOrderAtDore"
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
          :label-position="labelPosition"
        >
          <b-input v-model="wishList" maxlength="200" type="textarea"></b-input>
        </b-field>
      </div>

      <b-button
        v-if="costumerName && tel && city && house && street"
        @click="acceptAll"
        type="is-success"
        size="is-large"
        outlined
        >Замовити</b-button
      >
    </div>
    <div class="acceptCard" v-if="accept">
      <table>
        <tr>
          <th>Замовлення прийняте !</th>
          <th>{{ new Date() }}</th>
        </tr>
        <tr>
          <th>Ім'я</th>
          <td>{{ costumerName }}</td>
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
          <th>дом</th>
          <td>{{ house }}</td>
        </tr>
        <tr>
          <th>під'їзд</th>
          <td>{{ entance }}</td>
        </tr>
        <tr>
          <th>кв</th>
          <td>{{ flat }}</td>
        </tr>
        <tr>
          <th>не дзвонити в двері?</th>
          <td>{{ dontRingDore }}</td>
        </tr>
        <tr>
          <th>залишити під дверима?</th>
          <td>{{ leaveOrderAtDore }}</td>
        </tr>
        <tr>
          <th>кометарі</th>
          <td>
            {{ wishList }}
          </td>
        </tr>

        <tr v-for="product in getMyStoreCart" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.count }} шт.</td>
          <td>{{ product.price }}</td>
        </tr>
        <tr>
          <th>всього</th>
          <th>{{ getTotalPrice }}</th>
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
  },

  data() {
    return {
      isVisible: true,
      isOrder: false,
      labelPosition: "on-border",
      costumerName: "",
      tel: "",
      city: "",
      street: "",
      house: "",
      entance: "",
      flat: "",
      dontRingDore: false,
      leaveOrderAtDore: false,
      wishList: "",
      accept: false,
    };
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

    GetOrder() {
      if (this.getTotalPrice >= 200) {
        this.isOrder = true;
        this.isVisible = false;
      }
    },

    acceptAll() {
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
  border: 1px solid rgb(7, 7, 6);
  padding: 1px;
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

.toMatchSushi{
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


</style>