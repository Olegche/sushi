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
    }

  };