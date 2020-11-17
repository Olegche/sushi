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
      <calcu />
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
import Calcu from "./components/Calcu";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Shop",

  components: {
    ProductList,
    HeaderSection,
    FilterSection,
    Carousel,
    Calcu,
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
      else {
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
      }
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

    ...mapActions(['loadData']),

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

    sortByMinPrice() {
      return this.myProducts.sort((a, b) => a.price - b.price);
    },
    sortByMaxPrice() {
      return this.myProducts.sort((a, b) => b.price - a.price);
    },
  },

  mounted() {
    this.loadData(this)
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
.sortDiv {
  text-align: center;
  margin: 1px;
}

.sortDiv button {
  margin-left: 20px;
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
</style>