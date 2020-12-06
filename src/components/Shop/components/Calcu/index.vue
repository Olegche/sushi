<template>
  <div>
    <div class="mainDivCalculator">
      <button class="btnCalculatorShow" @click="show">?</button>

      <div class="cal" v-if="showCalculator">
        <label>Добова норма калорій</label>
        <br />
        <label
          ><input v-model="sex" type="radio" name="sex" value="man" /> чоловік
        </label>
        <label
          ><input v-model="sex" type="radio" name="sex" value="wooman" /> жінка
        </label>
        <div>
          вік:
          <b-slider
            v-model="age"
            type="is-warning"
            :min="13"
            :max="80"
            :step="1"
          ></b-slider>
        </div>
        <div>
          ріст:
          <b-slider
            v-model="height"
            type="is-warning"
            :min="140"
            :max="210"
            :step="1"
          ></b-slider>
        </div>
        <div>
          вага:
          <b-slider
            v-model="weight"
            type="is-warning"
            :min="40"
            :max="150"
            :step="1"
          ></b-slider>
        </div>
        <div>
          <button class="btnCalculatorResult" @click="checkRes">
            порахувати
          </button>
        </div>
        <div v-if="resultIs && resultIs > 0">
          Ваша норма становить {{ resultIs }} ккл на день
        </div>
        <div>
          <div class="TotalCaloriesinCart">
            Калорійність усіх товарів в корзині :{{ getTotalCalories() }}ккл
          </div>
          <button class="btnCalculatorHide" @click="hide">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Calcu",

  computed: {
    ...mapGetters(["getMyStoreCartLength", "getMyStoreCart"]),
  },

  data() {
    return {
      isCalculated: false,  
      sex: "man",
      weight: 40,
      height: 140,
      age: 13,
      resultIs: "",
      showCalculator: false,
    };
  },

  methods: {
    ...mapActions([
      "setUserSex",
      "setUserWeight",
      "setUserHeight",
      "setUserAge",
      "setUserResultIs",
      "setUserIsCalculated"
    ]),

    checkRes() {
        this.isCalculated = true
      if (this.sex === "man") {
        this.resultIs = Math.round(
          (10 * this.weight + 6.25 * this.height - (5 * this.age + 5)) * 1.3
        );
      } else if (this.sex === "wooman") {
        this.resultIs = Math.round(
          (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1.3
        );
      } else this.resultIs = "2000";
      setTimeout(() => this.showCalculator=false, 10000)
    },
    show() {
      this.showCalculator = !this.showCalculator;
    },
    hide() {
      this.showCalculator = false;
    },
    getTotalCalories() {
      if (this.getMyStoreCartLength > 0) {
        let res = [];
        for (let product of this.getMyStoreCart) {
          res.push(product.calories * product.count);
        }
        res = res.reduce((a, b) => a + b);
        return res;
      } else return "0";
    },
  },

  watch: {
    sex(newValue) {
      this.setUserSex(newValue);
    },
    weight(newValue) {
      this.setUserWeight(newValue);
    },
    height(newValue) {
      this.setUserHeight(newValue);
    },
    age(newValue) {
      this.setUserAge(newValue);
    },
    resultIs(newValue) {
      this.setUserResultIs(newValue);
    },
    isCalculated(newValue) {
        this.setUserIsCalculated(newValue)
    },
  },
};
</script>

<style lang="css" scoped>
.mainDivCalculator{
  margin-bottom: 10px;
}
.btnCalculatorShow {
  background-color: rgb(35, 209, 96);
  border-radius: 20px;
  border-width: 0px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.68, -0.95, 0.265, 1.55);
}
.btnCalculatorShow:hover {
  transform: scale(1.3) rotate(1turn);
  cursor: pointer;
}
.btnCalculatorResult {
  background-color: rgb(35, 209, 96);
  border-radius: 7px;
  border-width: 0.1px;
  font-family: sans-serif;
  font-size: 20px;
  color: white;
  margin-bottom: 7px;
  cursor: pointer;
}
.btnCalculatorResult:hover {
  cursor: pointer;
}
.btnCalculatorHide {
  background-color: rgb(245, 56, 56);
  border-radius: 20px;
  border-width: 0px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.68, -0.95, 0.265, 1.55);
  margin-bottom: 20px;
}

.btnCalculatorHide:hover {
  cursor: pointer;
  transform: scale(1.1) rotate(1turn);
}

.TotalCaloriesinCart {
  background: rgb(121, 87, 213);
  color: white;
  border-radius: 9px;
  padding: 2px;
  margin: 1px;
}
</style>