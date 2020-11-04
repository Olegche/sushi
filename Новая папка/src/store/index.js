import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store (
    {
        state: { // стан
            myStoreProducts: [  // список всіх страв
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
    
              MyStoreCart: [

              ],
        },

        mutations: {
            addProductToMyStoreCart(state, id) {
                state.MyStoreCart.push(id)
            },

            removeFromCart(state, index){
                state.MyStoreCart.splice(index,1)
            }
           
        
        },

        actions: {
            addToMyStoreCart({ commit }, id) {
                commit('addProductToMyStoreCart', id)
            },

            removeFromCart({ commit }, index) {
                commit('removeFromCart', index)
              },
        },

        getters: {
            getMyStoreCartLength: (state) => state.MyStoreCart.length,

            getMyStoreCart: (state) => state.MyStoreCart,

            myProducts: (state) => state.myStoreProducts

           
        }

       
    }
)

export default store