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
    myStoreProducts: [ 
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