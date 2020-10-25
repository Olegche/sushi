<template>
    <b-navbar >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/images/sushi2.gif"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  Головна
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">
               Доставка
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/cart' }">
                 Корзина
            </b-navbar-item>
            <b-navbar-dropdown label="Детальна інформація">
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    Ми
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                   Контакти
                </b-navbar-item>

                
            </b-navbar-dropdown>

<div class="wrapper" v-if="signUpBtn">
 <div class="signUp" >
                 <b-field label="Name" :label-position="labelPosition">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="is-warning">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <template slot="message">
                <div>Password is too short</div>
                <div>Password must have at least 8 characters</div>
                <b-button type="is-success">Sign</b-button>
            </template>
        </b-field>
            </div>
</div>

<div class="wrapper" v-if="login" >
<div class="signUp" >
    <b-field label="Username"
            :type="{ 'is-danger': hasError }"
            :message="{ 'Username is not available': hasError }">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :type="{ 'is-danger': hasError }"
            :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <b-button type="is-success">Login</b-button>
        </b-field>

</div>
</div>

           
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" @click="signUp">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" @click="loginUp">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name : 'Navbar',
        
        data() {
            return {
                signUpBtn: false,
                login: false
            }
        },

        methods: {


            signUp() {
                this.signUpBtn = true
                this.login= false
                
            },
            loginUp() {
                this.signUpBtn = false
                this.login = true

            }
        },
        
    }
</script>

<style lang="css" scoped>
.navbar{
    position: fixed;
    margin-top: -60px;
    width: 100%;
}
.signUp{
    
    text-align: center;
    
    
    background-color: rgba(119, 136, 153, 0.611);
    width: 309px;
    height: 399px;
    border-width: medium;
    padding: 20px;
}
.wrapper {
    position: absolute;
    margin-left: 30%;
    margin-bottom: 20%;
    text-align: center;
    padding: 90px;
    margin-top: 10%;
    background-color: rgba(119, 136, 153, 0.611);
    width: 309px;
    height: 300px;
    border-width: medium;
    width: 500px;
    height: 590px;
    background-color: rgba(0, 0, 205, 0.283);
}

</style>