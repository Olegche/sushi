export default {
    products: {
      read: `${process.env.VUE_APP_API_URL}/products`,
      add: `${process.env.VUE_APP_API_URL}/products/add`,
      update: `${process.env.VUE_APP_API_URL}/products/update`,
      delete: `${process.env.VUE_APP_API_URL}/products/delete`,
    },
    user: {
        signup:`${process.env.VUE_APP_API_URL}/users/signup`,
        login:`${process.env.VUE_APP_API_URL}/users/login`
    },
    orders: {
      read: `${process.env.VUE_APP_API_URL}/orders`,
      add: `${process.env.VUE_APP_API_URL}/orders/add`,
      update: `${process.env.VUE_APP_API_URL}/orders/update`,
      
    },

  };