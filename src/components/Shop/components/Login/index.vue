<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div>Please log in</div>
      <div>
        <b-field label="Email">
          <b-input type="email" v-model="email"  >
          </b-input>
        </b-field>
       

        <b-field label="Password">
          <b-input type="password" v-model="password"  password-reveal>
          </b-input>
        </b-field>
      </div>
      <div class="form-group error" v-if="message">{{ message }}</div>

      <button class="is-success">Login in</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);

        if (result === true) {
          this.message = "";

          this.$router.push({ path: "/" });
        } else {
          this.message = "Login error!";
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>



