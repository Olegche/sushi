<template>
    <div>
        <div class="img-container">
            <div class="img-1">
<img :src="imm" class="img">
</div>
            <div class="img-2">
<img :src="imm" alt=""  class="img">
</div>
</div>
        <div>{{title}}</div>
        <div>
            <todo-item v-for="taskItem in tasksList" :key="taskItem.id"
                :task="taskItem.task"
                :time="taskItem.time"
                :status='taskItem.status'
             @my-postponed="onPostponed(taskItem.id)"
             @plan="onPlan($event, taskItem.id)"
             />
        </div>
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
            title:{
                type:String,
                default:'no title'
            },
            imm:{
                type:String,
                default:require('@/assets/images/smile.jpg')
            }
        },

        methods: {
            onPlan(valDate,id){

            },
            onPostponed(id) {
                const task=this.tasksList.find(item=>item.id===id)
                task.status='POSTPONED'
            }
        },
    }
</script>

<style lang="css" scoped>
.img-container{
    width: 100%;
display: flex;
}
.image-1{
    width:100px;
    float: left;
}
.image-2{
    width:100px;
    float: right;
}
.img{
    width: 100px;
}
</style>