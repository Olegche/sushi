<template>
    <div>
        <span>{{task}}</span>
        <span>{{time}}</span>
        <button>Виконати</button>
        <button>Запланувати</button>
        <button>Відкласти</button>
    </div>
</template>

<script>
    export default {
        name:"TodoItem",

        props: {
            task: {
                type: String,
                default:'',                 
            },
            time: {
                type: String,
                default:'',                 
            },
            status:{
                type: String,
                default:'',
            }
        },
    }
</script>

<style lang="css" scoped>
.new{
    background-color: red;
}
.in-progres{
    background-color: yellow;
}
.postponed{
    background-color: blue;
}
</style>