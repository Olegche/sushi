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
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name : 'Navbar'
        
    }
</script>

<style lang="css" scoped>
.navbar{
    position: fixed;
    margin-top: -60px;
    width: 100%;
}

</style>