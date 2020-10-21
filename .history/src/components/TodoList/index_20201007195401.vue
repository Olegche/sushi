<template>
    <div>

    </div>
</template>

<script>
import TodoItem from "./TodoItem";
    export default {
        name:"TodoList",

        components: {
            TodoItem,
        },

        props: {
            tasksList: {
                type: Array,
                default: ()=>[]
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>