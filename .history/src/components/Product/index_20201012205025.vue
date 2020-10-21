<template>
    <div class="container">
        <img class="img" :src="img">
        <div class="text">
            {{title}}
        </div>
        <div class="text">
            {{price}}
        </div>
        <div>
            {{priceDol}}
        </div>
    </div>
</template>

<script>
    export default {
        name:"Product",

        props: {
            img: {
                type: String,
                default: require('@/assets/images/smile.jpg')
            },
            title:{
                type:String,
                default:''
            },
            price:{
                type:[String, Number],
                default:'For free'
            }
        },

        computed: {
            priceDol() {
                return this.price/28
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    width: 170px;
    padding: 10px;
    height: 200px;
}
.img{
    width: 150px;
    max-height: 150px;
}
.text{
    font-size: 14px;
    text-align: center;
}
</style>