import axios from "axios";
import apiEndpoints from "@/constans/apiEndpoints";

export default {
    namespaced: true,
    state: {
        ordersList: [],
    },
    mutations: {
        setOrdersList(state, data) {
            state.ordersList = [...data]
        }
    },
    actions: {
        loadData({
            commit
          }) {
            axios.get(apiEndpoints.orders.read)
              .then((res) => res.data)
      
              .then((resData) => {
                if (resData) {
                  commit("setOrdersList", resData);
                }
              })
          },

          addOrder({
            dispatch
         }, orderData) {
     
           axios
             .post(apiEndpoints.orders.add, orderData)
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
         updateOrder({
          dispatch
        }, orderData) {
    
          axios
            .put(apiEndpoints.orders.update, orderData)
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

         
    },
    getters: {
      getOrderStatus: (state) => state.ordersList.find((item) => !item.statusOrder ),

        getOrders: (state) => state.ordersList,
        orderId: (state) => (state.ordersList ? state.ordersList._id : null),
    },
};