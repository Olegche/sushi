<template>
    <div>
        <img :src="img">
        <div>
            {{title}}
        </div>
        <div>
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

<style lang="scss" scoped>

</style>