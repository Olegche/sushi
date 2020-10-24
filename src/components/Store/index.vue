<template>
  <div>
    
    <!-- <navbar/> -->
     

    <div class="logo">
      <p class="phone">

        <b>one call and</b>

        ...have your tasty right now <a> +380 (67) 95 87 995</a>
      </p>
      <img src="@/assets/images/sushi2.gif" alt="logo" class="imglog" />
    </div>
    <div>
      <carousel />
    </div>
    
      
    
    <header-section
      :products-in-cart="productsInCart"
      @title-filter="setTextFilterData"
      @clear-cart="clearCart"
      @remove-last-one="removeLastProduct"
    />
        <div class="mainDivCalculator">
        <button class="btnCalculatorShow" @click="show">?</button>
        
      <div class="cal" v-if="showCalculator">
        <label>Добова норма калорій</label>
        <br>
        <label
          ><input  v-model="sex" type="radio" name="sex" value="man"  /> чоловік </label
        >
        <label
          ><input v-model="sex" type="radio" name="sex" value="wooman" /> жінка </label
        >
        <div>
            вік:
        <b-slider v-model="age" type="is-warning" :tooltip-type="sliderType"   :min="13" :max="80" :step="1" ></b-slider>

        </div>
         <div>
            ріст:
        <b-slider v-model="height" type="is-warning" :tooltip-type="sliderType"   :min="140" :max="210" :step="1" ></b-slider>
        </div>
        <div>
            вага:
        <b-slider v-model="weight" type="is-warning" :tooltip-type="sliderType"   :min="40" :max="150" :step="1" ></b-slider>
        </div>
        <div>
            <button class="btnCalculatorResult" @click="checkRes">порахувати</button>
        </div>
        <div v-if="resultIs && resultIs > 0">
            {{resultIs}} ккл на день
        </div>
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
      <product-list
        :products="filteredProducts"
        @add-to-cart="addProductToCart"
      />
    
    </div>

    
    
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import HeaderSection from "./components/HeaderSection";
import FilterSection from "./components/FilterSection";
import Carousel from "./components/Carousel";
// import  Navbar  from "./components/Navbar";

export default {
  name: "Store",

  components: {
    ProductList,
    HeaderSection,
    FilterSection,
    Carousel,
    // Navbar
  },
  props: {
            sex: {
            type: [String,Boolean],
            default: "man"
            },
            age: {
            type: Number,
            default: null
            },
             weight: {
            type: Number,
            default: null
            },
            height: {
            type: Number,
            default: null
            },
            resultIs: {
            type: Number,
            default: null
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

      // caloriesList: [
      //   {
      //     id: "",
      //     calories: 'довільні калорії',
      //   },
      //   {
      //     id: 60,
      //     calories: 60,
      //   },
      //   {
      //     id: 99,
      //     calories: 99,
      //   },
      // ],
      filter: {
        textFilter: null, //Щоб була реактивність
        minPrice: null,
        maxPrice: null,
        calories: null,
        category: null,
        isVegan: null
      },

      productsInCart: 0,

      myProducts: [
        {
          id: 1,
          title: "sushi salmon",
          price: 46,
          img:
             require("@/assets/images/sushies/sushi5.png"),
          category: "sushi",
          calories: 60,
          isVegan: false
        },
        {
          id: 2,
          title: "sushi shark",
          price: 47,
          img:
            require("@/assets/images/sushies/sushi1.png"),
          category: "sushi",
          calories: 90,
          isVegan: false
        },

         {
          id: 3,
          title: "sushi marlin",
          price: 90,
          img:
            require("@/assets/images/sushies/sushi2.png"),
          category: "sushi",
          calories: 90,
          isVegan: false
        },
        {
          id: 4,
          title: "sushi makrel",
          price: 90,
          img:
            require("@/assets/images/sushies/sushi4.png"),
          category: "sushi",
          calories: 90,
          isVegan: false
        },
        {
          id: 5,
          title: "sushi  shrimp",
          price: 46,
          img:
             require("@/assets/images/sushies/sushi7.png"),
          category: "sushi",
          calories: 60,
          isVegan: false
        },
        {
          id: 6,
          title: "sushi octopus",
          price: 46,
          img:
             require("@/assets/images/sushies/sushi8.png"),
          category: "sushi",
          calories: 60,
          isVegan: false
        },
        {
          id: 7,
          title: "sushi eel",
          price: 46,
          img:
             require("@/assets/images/sushies/sushi3.png"),
          category: "sushi",
          calories: 60,
          isVegan: false
        },
        {
          id: 8,
          title: "gunkan satori",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan1.png"),
          category: "gunkan",
          calories: 70,
          isVegan: true
        },
        {
          id: 9,
          title: "gunkan uke",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan2.png"),
          category: "gunkan",
          calories: 90,
          isVegan: true
        },
        {
          id: 10,
          title: "gunkan kiokushin",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan3.png"),
          category: "gunkan",
          calories: 70,
          isVegan: false
        },
        {
          id: 11,
          title: "gunkan dodziu",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan4.png"),
          category: "gunkan",
          calories: 90,
          isVegan: true
        },
        {
          id: 12,
          title: "gunkan kabusi",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan5.png"),
          category: "gunkan",
          calories: 60,
          isVegan: false
        },
        {
          id: 13,
          title: "gunkan tobiko",
          price: 46,
          img:
             require("@/assets/images/sushies/gunkan6.png"),
          category: "gunkan",
          calories: 60,
          isVegan: false
        },

        {
          id: 14,
          title: "philadelfia roll",
          price: 1200,
          img:
            require("@/assets/images/sushies/roll11.png"),
          category: "roll",
          calories: 550,
          isVegan: false
        },
        {
          id: 15,
          title: "california roll",
          price: 139,
          img:
            require("@/assets/images/sushies/roll2.png"),
          category: "roll",
          calories: 500,
          isVegan: false
        },
        {
          id: 16,
          title: "samurai set",
          price: 1200,
          img:
            require("@/assets/images/sushies/set1.png"), 
          category: "set",
          calories: 900,
          isVegan: false
          
        },
        {
          id: 17,
          title: "iga set",
          price: 1000,
          img:
            require("@/assets/images/sushies/set2.png"),
          category: "set",
          calories: 1100,
          isVegan: false
          
        },
         {
          id: 18,
          title: "japan set",
          price: 900,
          img:
              require("@/assets/images/sushies/set5.png"),
          category: "set",
          calories: 1000,
          isVegan: false
        },
        {
          id: 19,
          title: "ninja set",
          price: 900,
          img:
              require("@/assets/images/sushies/set3.png"),
          category: "set",
          calories: 890,
          isVegan: false
        },
         {
          id: 20,
          title: "tokyo set",
          price: 900,
          img:
              require("@/assets/images/sushies/set6.png"),
          category: "set",
          calories: 1200,
          isVegan: false
        },
        {
          id: 21,
          title: "salat hiyashi",
          price: 46,
          img:
             require("@/assets/images/sushies/salat1.png"),
          category: "salat",
          calories: 120,
          isVegan: true
        },
        {
          id: 22,
          title: "salat yoshi",
          price: 46,
          img:
             require("@/assets/images/sushies/salat2.png"),
          category: "salat",
          calories: 270,
          isVegan: true
        },
        {
          id: 23,
          title: "salat ipon",
          price: 46,
          img:
             require("@/assets/images/sushies/salat3.png"),
          category: "salat",
          calories: 300,
          isVegan: true
        },
        {
          id: 24,
          title: "salat do",
          price: 46,
          img:
             require("@/assets/images/sushies/salat4.png"),
          category: "salat",
          calories: 290,
          isVegan: true
        },
        
       
       
      ],
    };
  },

  computed: {
    // yearsList() {
    //   const arr = [];
    //   this.filteredProducts.forEach((element) => {
    //     if (!arr.includes(element.year)) arr.push(element.year);
    //   });
    //   arr.sort();
    //   return arr;
    // },
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
          (this.filter.calories=== null ||
            item.calories <= this.filter.calories) &&
          (this.filter.category === null ||
            item.category === this.filter.category) &&
            (this.filter.isVegan === null ||
            item.isVegan === true )

      );
    },
    isFilterEmpty() {
      return (
        !this.filter.textFilter &&
        this.filter.minPrice === null &&
        this.filter.maxPrice === null &&
        this.filter.calories === null &&
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

    addProductToCart() {
      this.productsInCart++;
    },

    clearCart() {
      this.productsInCart = null;
    },

    removeLastProduct() {
      this.productsInCart += -1;
    },
    checkRes() {
          if(this.sex === "man") {

       this.resultIs = Math.round((((10 * this.weight) + 6.25 * this.height) - ((5 * this.age) + 5)) * 1.3)
          }
          else if (this.sex === "wooman") {
                     this.resultIs = Math.round((((10 * this.weight) + 6.25 * this.height) - ((5 * this.age)) - 161) * 1.3)

          }
          else
          this.resultIs = '2000'
          
      },
      show() {
          this.showCalculator = true
      },
      hide() {
          this.showCalculator = false
      }
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
.mainDivCalculator{
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
   background-color: rgb(168, 240, 97);
   border-radius: 20px;
   border-width: 0.1px;
   width: 30px;
   height: 30px;
   font-size: 20px;
   font-family:sans-serif;
   color:rgb(59, 114, 198);
   
  
   
}
.btnCalculatorResult {
   background-color: rgba(233, 150, 122, 0.824);
   border-radius: 7px;
   border-width: 0.1px;
   font-family:sans-serif;
   font-size: 20px;
   color: white;
   margin-bottom: 7px
}
.btnCalculatorHide{
 background-color: rgb(245, 56, 56);
   border-radius: 20px;
   border-width: 0.1px;
   width: 30px;
   height: 30px;
   font-size: 20px;
   font-family:sans-serif;
   color:rgb(255, 255, 255)
}


</style>