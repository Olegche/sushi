<template>
    <div>
        <img class="img" :src="img">
        <div class="text">
            {{title}}
        </div>
        <div class="text">
            {{price}}
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
    }
</script>

<style lang="css" scoped>
.img{
    width: 150px;
}
.text{
    font-size: 14px;
    text-align: center;
}
</style>