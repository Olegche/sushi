<template>
    <div class="container">
        <div>
            Ціна
            <div class="price">
                <input type="number" min="0" v-model="minPrice" placeholder="min"                
                > -
                <input type="number" min="0" v-model="maxPrice" placeholder="max">
            </div>
        </div>
        <div>
            Рік
            <div>
                <input type="date" v-model="year" placeholder="year">                
            </div>
        </div>
        <div>
            Категорія
            <div>
                <select v-model="category">
                   <option v-for="cat in categoriesList" :key="cat"
                    :value="cat.id">{{cat.title}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'FilterSection',
        props: {
            categoriesList: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                minPrice: null,
                maxPrice:null,
                year:null,
                category:null,

            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    width:300px;
    background-color: cyan;
}
.container div{
    display: block;
}
.price input{

        width: 50px;
}
</style>