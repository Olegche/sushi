<template>
  <div class="container">
    <div class="is-two-fifths">
      <div>
        Фільтрувати за цінами:

        <div class="inputControls">
          <span>
            від
            <input type="number" v-model="minPrice" min="0" max="3000" />
          </span>

          <span>
            до
            <input type="number" v-model="maxPrice" min="0" max="3000" /> грн.
          </span>
        </div>
      </div>
      <div>
        <hr />

        Контролювати калорійність:
        <div class="inputControls">
          <span>
            від
            <input type="number" v-model="minCalories" min="0" max="3000" />
          </span>

          <span>
            до
            <input type="number" v-model="maxCalories" min="0" max="3000" />
          </span>
          ККАЛ
        </div>

        <hr />

        <div class="categoryFilter">
          <b-field type="is-success">
            <b-select v-model="category" placeholder="Оберіть улюблені страви">
              <option
                v-for="cat in getCategoryList"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.title }}
              </option>
            </b-select>
          </b-field>
        </div>
        <div class="field">
          <b-checkbox v-model="isVegan" size="is-medium" type="is-success"
            >I am vegan!</b-checkbox
          >

          <div>
            <br />
            <b-button @click="cleanFilter" type="is-danger" outlined
              >очистити фільтри
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FilterSection",

  data() {
    return {
      minPrice: null,
      maxPrice: null,
      maxCalories: null,
      minCalories: null,
      category: null,
      isVegan: null,
    };
  },

  computed: {
    ...mapGetters(["getCategoryList"]),

    sliderType() {
      if (
        (this.maxCalories <= 2000 && this.maxCalories > 1000) ||
        (this.minCalories <= 2000 && this.minCalories > 1000)
      ) {
        return "is-danger";
      } else if (this.maxCalories >= 500 || this.minCalories >= 500) {
        return "is-warning";
      }
      return "is-success";
    },
  },

  watch: {
    minPrice(newValue) {
      this.$emit("filter-changed", {
        minPrice: parseInt(newValue) || null,
      });
    },
    maxPrice(newValue) {
      this.$emit("filter-changed", {
        maxPrice: parseInt(newValue) || null,
      });
    },
    maxCalories(newValue) {
      this.$emit("filter-changed", {
        maxCalories: parseInt(newValue) || null,
      });
    },
    minCalories(newValue) {
      this.$emit("filter-changed", {
        minCalories: parseInt(newValue) || null,
      });
    },
    category(newValue) {
      this.$emit("filter-changed", {
        category: newValue || null,
      });
    },
    isVegan(newValue) {
      this.$emit("filter-changed", {
        isVegan: newValue || null,
      });
    },
  },

  methods: {
    cleanFilter() {
      (this.minPrice = null),
        (this.maxPrice = null),
        (this.maxCalories = null),
        (this.minCalories = null),
        (this.category = null),
        (this.isVegan = null);
    },
  },
  // mounted () {
  //     this.numbers=[this.minPrice, this.maxPrice];
  // },
};
</script>

<style lang="css" scoped>
.container {
  width: 300px;
  height: 450px;
  max-width: 300px;
  background-color: rgba(241, 151, 87, 0.515);
  border-radius: 20px;
  padding: 19px;
  float: left;
  margin-left: 7px;
  margin-right: 10px;
  position: sticky;
  top: 3em;
  z-index: 99999;
}
.container div {
  display: block;
  margin-bottom: 20px;
}

.inputControls {
  width: 250px;
  margin: 10px;
}

.categoryFilter {
  text-align: left;
}
.categoryFilter select {
  width: 100px;
}


</style>