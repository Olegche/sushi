<template>

  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/images/sushi2.gif"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Головна
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">
        Доставка
      </b-navbar-item>

      <b-navbar-dropdown label="Детальна інформація">
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          Ми
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
          Контакти
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown
        v-if="isAuthenticated()"
        label="Сторінка адміністратора"
      >
        <b-navbar-item tag="router-link" :to="{ path: '/addProductForm/new' }">
          Додати продукт на сайт
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          v-if="isAuthenticated()"
          :to="{ path: '/editProductForm' }"
        >
          Редагувати продукти
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          v-if="isAuthenticated()"
          :to="{ path: '/order-list' }"
        >
          Список замовлень⁣⁣⁣⁣⁣⁤⁤
          <br>
          <b-icon v-if="getOrderStatus"
              icon="mdi mdi-bell-ring"
              type="is-warning"
            >
            </b-icon>
          
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item v-if="isAuthenticated()">
        <b-icon v-if="userNick "
              icon="mdi mdi-account-check"
              size="is-large"
              type="is-success"
            >
            </b-icon>
            {{   userNick }}
      </b-navbar-item>

      
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <b-navbar-item tag="router-link" :to="{ path: '/cart' }">
          <!-- <img src="@/assets/images/cartImage.png" alt="">  -->
          <b-icon icon="mdi mdi-cart-outline" size="is-large" type="is-success">
          </b-icon>
          <span v-if="getMyStoreCartLength > 0" class="navbarCartLength">
            {{ getMyStoreCartLength }}
          </span>
        </b-navbar-item>
        <b-navbar-dropdown label="admin">
          <div class="buttons">
            <b-icon
              icon="mdi mdi-account-key"
              size="is-large"
              type="is-success"
            >
            </b-icon>

            <router-link to="/login" class="button is-light">Login</router-link>
            <router-link to="/signup" class="button is-primary"
              >Sign up</router-link
            >
            <div class="button is-danger" @click="onLogout">Logout</div>
          </div>
        </b-navbar-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>

  
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters("auth", ["isAuthenticated", "userNick"]),
    ...mapGetters(["getMyStoreCartLength"]), ///  дублюю . як передати в мепгеттер екшин з модуля і екшн з стора?
    ...mapGetters("orders", ["getOrderStatus"]),
  },

  data() {
    return {
      signUpBtn: false,
      login: false,
    };
  },

  methods: {
    ...mapActions("auth", ["logout"]),
    onLogout() {
      this.logout();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="css" scoped>
.navbar {
  position: fixed;
  margin-top: -60px;
  width: 100%;
}
.signUp {
  text-align: center;

  background-color: rgba(119, 136, 153, 0.611);
  width: 309px;
  height: 399px;
  border-width: medium;
  padding: 20px;
}

.signUp b-button {
  margin: 11px;
}
.wrapper {
  position: absolute;
  margin-left: 30%;
  margin-bottom: 20%;
  text-align: center;
  padding: 90px;
  margin-top: 20%;
  background-color: rgba(119, 136, 153, 0.611);
  width: 309px;
  height: 300px;
  border-width: medium;
  width: 500px;
  height: 590px;
  background-color: rgba(199, 199, 202, 0.283);
}
.btnCloseForm {
  width: 31px;
  height: 31px;
  font-size: 20px;
  float: right;
  border-radius: 3px;
  background-color: rgb(243, 57, 57);
  color: white;
  border-width: 0px;
}
.navbarCartLength {
  margin-left: 3px;
  color: rgb(17, 17, 15);
  font-size: 20px;
  border-radius: 100px;
  font-weight: bold;
  background-color: gold;
  padding: 3px;
}

.buttons {
  margin: 3px;
}


</style>