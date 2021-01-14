import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
// import firebase from "firebase";
import apiEndpoints from "@/constans/apiEndpoints";
import auth from "./modules/auth";
import orders from "./modules/orders";

Vue.use(Vuex)


const store = new Vuex.Store({
  state: { // стан
    myStoreProducts: [ // список всіх страв
      // {
      //   id: 1,
      //   title: "sushi salmon",
      //   price: 46,
      //   img: require("@/assets/images/sushies/sushi5.png"),
      //   category: "sushi",
      //   calories: 60,
      //   isVegan: false,

      // },
      // {
      //   id: 2,
      //   title: "sushi shark",
      //   price: 47,
      //   img: require("@/assets/images/sushies/sushi1.png"),
      //   category: "sushi",
      //   calories: 90,
      //   isVegan: false
      // },

      // {
      //   id: 3,
      //   title: "sushi marlin",
      //   price: 90,
      //   img: require("@/assets/images/sushies/sushi2.png"),
      //   category: "sushi",
      //   calories: 90,
      //   isVegan: false
      // },
      // {
      //   id: 4,
      //   title: "sushi makrel",
      //   price: 90,
      //   img: require("@/assets/images/sushies/sushi4.png"),
      //   category: "sushi",
      //   calories: 90,
      //   isVegan: false
      // },
      // {
      //   id: 5,
      //   title: "sushi  shrimp",
      //   price: 46,
      //   img: require("@/assets/images/sushies/sushi7.png"),
      //   category: "sushi",
      //   calories: 60,
      //   isVegan: false
      // },
      // {
      //   id: 6,
      //   title: "sushi octopus",
      //   price: 46,
      //   img: require("@/assets/images/sushies/sushi8.png"),
      //   category: "sushi",
      //   calories: 60,
      //   isVegan: false
      // },
      // {
      //   id: 7,
      //   title: "sushi eel",
      //   price: 46,
      //   img: require("@/assets/images/sushies/sushi3.png"),
      //   category: "sushi",
      //   calories: 60,
      //   isVegan: false
      // },
      // {
      //   id: 8,
      //   title: "gunkan satori",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan1.png"),
      //   category: "gunkan",
      //   calories: 70,
      //   isVegan: true
      // },
      // {
      //   id: 9,
      //   title: "gunkan uke",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan2.png"),
      //   category: "gunkan",
      //   calories: 90,
      //   isVegan: true
      // },
      // {
      //   id: 10,
      //   title: "gunkan kiokushin",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan3.png"),
      //   category: "gunkan",
      //   calories: 70,
      //   isVegan: false
      // },
      // {
      //   id: 11,
      //   title: "gunkan dodziu",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan4.png"),
      //   category: "gunkan",
      //   calories: 90,
      //   isVegan: true
      // },
      // {
      //   id: 12,
      //   title: "gunkan kabusi",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan5.png"),
      //   category: "gunkan",
      //   calories: 60,
      //   isVegan: false
      // },
      // {
      //   id: 13,
      //   title: "gunkan tobiko",
      //   price: 46,
      //   img: require("@/assets/images/sushies/gunkan6.png"),
      //   category: "gunkan",
      //   calories: 60,
      //   isVegan: false
      // },

      // {
      //   id: 14,
      //   title: "philadelfia roll",
      //   price: 1200,
      //   img: require("@/assets/images/sushies/roll11.png"),
      //   category: "roll",
      //   calories: 550,
      //   isVegan: false
      // },
      // {
      //   id: 15,
      //   title: "california roll",
      //   price: 139,
      //   img: require("@/assets/images/sushies/roll2.png"),
      //   category: "roll",
      //   calories: 500,
      //   isVegan: false
      // },
      // {
      //   id: 16,
      //   title: "samurai set",
      //   price: 1200,
      //   img: require("@/assets/images/sushies/set1.png"),
      //   category: "set",
      //   calories: 900,
      //   isVegan: false

      // },
      // {
      //   id: 17,
      //   title: "iga set",
      //   price: 1000,
      //   img: require("@/assets/images/sushies/set2.png"),
      //   category: "set",
      //   calories: 1100,
      //   isVegan: false

      // },
      // {
      //   id: 18,
      //   title: "japan set",
      //   price: 900,
      //   img: require("@/assets/images/sushies/set5.png"),
      //   category: "set",
      //   calories: 1000,
      //   isVegan: false
      // },
      // {
      //   id: 19,
      //   title: "ninja set",
      //   price: 900,
      //   img: require("@/assets/images/sushies/set3.png"),
      //   category: "set",
      //   calories: 890,
      //   isVegan: false
      // },
      // {
      //   id: 20,
      //   title: "tokyo set",
      //   price: 900,
      //   img: require("@/assets/images/sushies/set6.png"),
      //   category: "set",
      //   calories: 1200,
      //   isVegan: false
      // },
      // {
      //   id: 21,
      //   title: "salat hiyashi",
      //   price: 46,
      //   img: require("@/assets/images/sushies/salat1.png"),
      //   category: "salat",
      //   calories: 120,
      //   isVegan: true
      // },
      // {
      //   id: 22,
      //   title: "salat yoshi",
      //   price: 46,
      //   img: require("@/assets/images/sushies/salat2.png"),
      //   category: "salat",
      //   calories: 270,
      //   isVegan: true
      // },
      // {
      //   id: 23,
      //   title: "salat ipon",
      //   price: 46,
      //   img: require("@/assets/images/sushies/salat3.png"),
      //   category: "salat",
      //   calories: 300,
      //   isVegan: true
      // },
      // {
      //   id: 24,
      //   title: "salat do",
      //   price: 46,
      //   img: require("@/assets/images/sushies/salat4.png"),
      //   category: "salat",
      //   calories: 290,
      //   isVegan: true
      // },

    ],

    MyStoreCart: [

    ],

    userData: {
      sex: "man",
      weight: 40,
      height: 140,
      age: 13,
      resultIs: "",
      isCalculated: "",
    },

    categoriesList: [{
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
      {
        id: "drink",
        title: "Напої",
      },
    ],

  },

  mutations: {

    setMyStoreProducts(state, data) {
      state.myStoreProducts = [...data];
    },

    addProductToMyStoreCart(state, _id) {
      const product = state.MyStoreCart.find((item) => item._id === _id)
      console.log(`${_id} from mut addProductToMyStoreCart`);
      if (product) product.count++
      else
        state.MyStoreCart.push({
          _id,
          count: 1,
        })
    },

    setUserSex(state, sex) {
      state.userData.sex = sex
    },
    setUserWeight(state, weight) {
      state.userData.weight = weight
    },
    setUserHeight(state, height) {
      state.userData.height = height
    },
    setUserAge(state, age) {
      state.userData.age = age
    },
    setUserResultIs(state, resultIs) {
      state.userData.resultIs = resultIs
    },
    setUserIsCalculated(state, isCalculated) {
      state.userData.isCalculated = isCalculated
    },



    removeFromCart(state, index) {
      state.MyStoreCart.splice(index, 1)
    },

    decrementCart(state, id) {
      const product = state.MyStoreCart.find((item) => item._id === id)
      product.count--
      if (product.count < 1)
        product.count = 1

    },

    addProductToList(state, product) {
      state.myStoreProducts.push(product);
    },

  },

  actions: {
    loadData({
      commit
    }) {
      axios.get(apiEndpoints.products.read)
        .then((res) => res.data)

        .then((resData) => {
          if (resData) {
            commit("setMyStoreProducts", resData);
          }
        })
    },

    addProduct({
       dispatch
    }, productData) {

      axios
        .post(apiEndpoints.products.add, productData)
        .then(
          //Якщо добре
          (res) => res.data,

        )

        .then((resData) => {
         console.log('ok');
          if (resData) dispatch('loadData')
          else throw new Error("Fatch failed!");
        })
        .catch((err) => { //Якщо погано
          console.log(` tut eror:  @@@@ ${err}`);
        })

    },
    //////
    updateProduct({
      dispatch
    }, productData) {

      axios
        .put(apiEndpoints.products.update, productData)
        .then(
          //Якщо добре
          (res) => res.data,
        )
        .then((resData) => {
          console.log(`resdata  $$$ ${resData}`);
          if (resData) dispatch('loadData')
          else throw new Error("Fatch failed!");
        })
        

    },
    deleteProduct({ dispatch }, _id) {
      
      console.log("id");
      console.log(_id);
      // axios.delete(apiEndpoints.products.delete,{params:{id}})    //через params, тоді на сервері берем з req.query.id
      axios.delete(apiEndpoints.products.delete, { data: { _id } }) //через data, тоді на сервері берем з req.body.id        
        .then(                             //Якщо добре
          res => res.data
        )
        .then((resData) => {
          if(resData.success)   dispatch ('loadData')
          else throw new Error('Fatch failed!')
        })
        
    },
    /////////

    // addProduct({
    //   dispatch
    // }, {
    //   productData
    // }) {

    //   const db = firebase.firestore();


    //   db.collection("myStoreProducts")
    //     .doc()
    //     .set({
    //       title: productData.title,
    //       price: productData.price,
    //       img: productData.img,
    //       category: productData.category,
    //       calories: productData.calories,
    //       isVegan: productData.isVegan,

    //     })
    //     .then(function () {
    //       console.log("Document successfully written!");
    //       dispatch("loadData");
    //     })
    //     .catch(function (error) {
    //       console.error("Error writing document: ", error);
    //     });
    // },

    // updateProduct({
    //   dispatch
    // }, {
    //   productData
    // }) {

    //   const db = firebase.firestore();


    //   db.collection("myStoreProducts")
    //     .doc(productData.id)
    //     .set({
    //       title: productData.title,
    //       price: productData.price,
    //       img: productData.img,
    //       category: productData.category,
    //       calories: productData.calories,
    //       isVegan: productData.isVegan,

    //     })
    //     .then(function () {
    //       console.log("Document successfully written!");
    //       dispatch("loadData");
    //     })
    //     .catch(function (error) {
    //       console.error("Error writing document: ", error);
    //     });
    // },

    // deleteProduct({
    //   dispatch
    // }, productId) {
    //   // commit("addProductToList", productData);
    //   const db = firebase.firestore();
    //   // Change a document in collection
    //   db.collection("myStoreProducts")
    //     .doc(productId)
    //     .delete()
    //     .then(function () {
    //       console.log("Document successfully del!");
    //       dispatch("loadData");
    //     })
    //     .catch(function (error) {
    //       console.error("Error writing document: ", error);
    //     });
    // },

    addToMyStoreCart({
      commit
    }, _id) {
      console.log(`${_id} from act addToMyStoreCart`);
      commit('addProductToMyStoreCart', _id)
    },

    setUserSex({
      commit
    }, sex) {
      commit('setUserSex', sex)
    },
    setUserWeight({
      commit
    }, weight) {
      commit('setUserWeight', weight)
    },
    setUserHeight({
      commit
    }, height) {
      commit('setUserHeight', height)
    },
    setUserAge({
      commit
    }, age) {
      commit('setUserAge', age)
    },
    setUserResultIs({
      commit
    }, resultIs) {
      commit('setUserResultIs', resultIs)
    },
    setUserIsCalculated({
      commit
    }, isCalculated) {
      commit('setUserIsCalculated', isCalculated)
    },



    removeFromCart({
      commit
    }, index) {
      commit('removeFromCart', index)
    },

    decrementCart({
      commit
    }, _id) {
      commit('decrementCart', _id)
    }

  },



  getters: {
    getMyStoreCartLength: (state) =>
      state.MyStoreCart.reduce((sum, item) => sum + item.count, 0),

    getMyStoreCart: (state) => {
      const arr = []
      state.myStoreProducts.forEach((product) => {
        const productObj = state.MyStoreCart.find((item) => item._id === product._id)
        console.log(`${product._id} from getMyStoreCart`);
        if (productObj) {
          arr.push({
            ...product,
            count: productObj.count,
          })
        }
      })
      return arr
    },

    getProductById: (state) => (id) => {
      return state.myStoreProducts.find((item) => item._id === id)



    },


    myProducts: (state) => state.myStoreProducts,

    getCategoryList: (state) => state.categoriesList,

    getUserSex: (state) => state.userData.sex,
    getUserWeight: (state) => state.userData.weight,
    getUserHeight: (state) => state.userData.height,
    getUserAge: (state) => state.userData.age,
    getUserResultIs: (state) => state.userData.resultIs,
    getUserIsCalculated: (state) => state.userData.isCalculated


  },
  modules: {
    
    auth,
    orders
  },


})

export default store