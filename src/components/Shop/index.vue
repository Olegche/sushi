<template>
  <div>
    <div class="logo">
      <p class="phone">
        <b>one call and</b>

        ...have your tasty right now <a href="tel:+380679587995">0679587995</a>
      </p>
      <img src="@/assets/images/sushi2.gif" alt="logo" class="imglog" />
    </div>
    <div>
      <carousel />
    </div>

    <header-section @title-filter="setTextFilterData" />
    <div class="sortDiv">
      <b-button @click="sortByMinPrice" type="is-success is-light">
        спочатку дешевші
      </b-button>
      <b-button @click="sortByMaxPrice" type="is-success is-light">
        спочатку дорожчі
      </b-button>
    </div>
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
            :tooltip-type="sliderType"
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
            :tooltip-type="sliderType"
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
            :tooltip-type="sliderType"
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
        <div v-if="resultIs && resultIs > 0">{{ resultIs }} ккл на день</div>
        <div>
          <button class="btnCalculatorHide" @click="hide">x</button>
        </div>
      </div>
    </div>
    <div class="container">
      <filter-section
        :categories-list="categoriesList"
        @filter-changed="setFilter"
      />
      <product-list :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import HeaderSection from "./components/HeaderSection";
import FilterSection from "./components/FilterSection";
import Carousel from "./components/Carousel";
import { mapGetters } from "vuex";

export default {
  name: "Shop",

  components: {
    ProductList,
    HeaderSection,
    FilterSection,
    Carousel,
    // Navbar
  },
  props: {
    sex: {
      type: [String, Boolean],
      default: "man",
    },
    age: {
      type: Number,
      default: null,
    },
    weight: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    resultIs: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      categoriesList: [
        {
          id: "",
          title: "Усі страви",
        },
        {
          id: "sushi",
          title: "Суши",
        },
        {
          id: "roll",
          title: "Роли",
        },
        {
          id: "set",
          title: " Сети",
        },
        {
          id: "salat",
          title: "Салат",
        },
        {
          id: "gunkan",
          title: "Гункани",
        },
      ],

      showCalculator: false,

      filter: {
        textFilter: null,
        minPrice: null,
        maxPrice: null,
        minCalories: null,
        maxCalories: null,
        category: null,
        isVegan: null,
      },
    };
  },

  computed: {
   
    ...mapGetters(["myProducts"]),

    filteredProducts() {
      if (this.isFilterEmpty) return this.myProducts;

      return this.myProducts.filter(
        (item) =>
          (!this.filter.textFilter ||
            item.title.toLowerCase().includes(this.filter.textFilter)) &&
          (this.filter.minPrice === null ||
            item.price >= this.filter.minPrice) &&
          (this.filter.maxPrice === null ||
            item.price <= this.filter.maxPrice) &&
          (this.filter.maxCalories === null ||
            item.calories <= this.filter.maxCalories) &&
          (this.filter.minCalories === null ||
            item.calories >= this.filter.minCalories) &&
          (this.filter.category === null ||
            item.category === this.filter.category) &&
          (this.filter.isVegan === null || item.isVegan === true)
      );
    },

    isFilterEmpty() {
      return (
        !this.filter.textFilter &&
        this.filter.minPrice === null &&
        this.filter.maxPrice === null &&
        this.filter.maxCalories === null &&
        this.filter.minCalories === null &&
        this.filter.category === null &&
        this.filter.isVegan === null
      );
    },
  },

  methods: {
    setTextFilterData(seachText) {
      this.filter = {
        ...this.filter,
        textFilter: seachText.toLowerCase(),
      };
    },
    setFilter(newFilter) {
      this.filter = {
        ...this.filter,
        ...newFilter,
      };
    },

    checkRes() {
      if (this.sex === "man") {
        this.resultIs = Math.round(
          (10 * this.weight + 6.25 * this.height - (5 * this.age + 5)) * 1.3
        );
      } else if (this.sex === "wooman") {
        this.resultIs = Math.round(
          (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1.3
        );
      } else this.resultIs = "2000";
    },
    show() {
      this.showCalculator = true;
    },
    hide() {
      this.showCalculator = false;
    },
    sortByMinPrice() {
      return this.myProducts.sort((a, b) => a.price - b.price);
    },
    sortByMaxPrice() {
      return this.myProducts.sort((a, b) => b.price - a.price);
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
}
.logo {
  text-align: center;
}
.imglog {
  width: 460px;
}
.phone {
  text-align: right;
  margin-right: 17px;
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
  position: sticky;
  top: 5em;
  min-height: 30em;
}
.btnCalculatorShow {
  background-color: limegreen;
  border-radius: 20px;
  border-width: 0px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: sans-serif;
  color: rgb(255, 255, 255);
}
.btnCalculatorShow:hover {
  width: 35px;
  height: 35px;
}
.btnCalculatorResult {
  background-color: rgba(233, 150, 122, 0.824);
  border-radius: 7px;
  border-width: 0.1px;
  font-family: sans-serif;
  font-size: 20px;
  color: white;
  margin-bottom: 7px;
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
}
.sortDiv {
  text-align: center;
  margin: 1px;
}

.sortDiv button {
  margin-left: 20px;
}
</style>