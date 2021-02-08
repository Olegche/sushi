<template>
  <div class="wrapper">
    <h2>Зареєструвати новий аккаунт</h2>
    <br>
    <form @submit.prevent="submit">
      <b-field label="Нікнейм">
        <b-input  v-model="nick"> </b-input>
      </b-field>
      <b-field label="Емейл">
        <b-input type="email" v-model="email"> </b-input>
      </b-field>

      <b-field label="Пароль">
        <b-input type="password" v-model="password" password-reveal> </b-input>
      </b-field>
      <div v-if="message">{{ message }}</div>
      <div>
        <button type="submit">Вперед!</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      nick: "",
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const user = {
          nick: this.nick,
          email: this.email,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({ path: "/login" });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err.message;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>
<style lang="css" scoped>
.wrapper {
  position: relative;
  display: block;
  text-align: center;
  margin: auto 39%;
  margin-top: 100px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(150, 126, 126, 9.5);
  border-radius: 9px;
  z-index: 999;
}

.wrapper button {
  border-radius: 7px;
  background-color: limegreen;
  color: mintcream;
  font-size: 17px;
  border-width: 0px;
  cursor: pointer;
  animation: pulse 2s infinite;
  margin: 19px;
}

.wrapper button:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(143, 247, 139, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(143, 247, 139, 0.5);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(143, 247, 139, 0.5);
    box-shadow: 0 0 0 10px rgba(143, 247, 139, 0.5);
  }
  100% {
    -moz-box-shadow: 0 0 0 rgba(143, 247, 139, 0.5);
    box-shadow: 0 0 0 0 rgba(143, 247, 139, 0.5);
  }
}
</style>

