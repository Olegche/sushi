<template>
    <div>

        <div>
            {{title}}

        </div>
        <div>
            <label>
                New task
                <input type="text" v-model="newTask" placeholder="Add new task here"> 
                <button @click="onAdd">
                    Add
                </button>
           </label>
        </div>
        <div>
            <todo-item v-for="taskItem in tasksList" :key="taskItem.id"
                :id="taskItem.id"
                :task="taskItem.task"
                :time="taskItem.time"
                :status='taskItem.status'
             @my-postponed="onPostponed(taskItem.id)"
             @plan="onPlan($event)"
             @done="onDone(taskItem.id)"
             />
        </div>
    </div>
</template>

<script>
import data from './settings'
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

        },

        data() {
            return {
                data,
                newTask:null
            }
        },

        methods: {
            onPlan(id){
                const task=this.tasksList.find(item=>item.id===id)
                task.status='IN-PROGRES'
            },
            onPostponed(id) {
                const task=this.tasksList.find(item=>item.id===id)
                task.status='POSTPONED'
            },
            onDone(id){
                const task=this.tasksList.find(item=>item.id===id)
                task.status='DONE'
            },
            onAdd(){
                this.tasksList.pop({
                    
                        id:2,
                        task:"Film",
                        time:'19.10',
                    status:"IN-PROGRES"
                    
                })
            }
        },
    }
</script>

<style lang="css" scoped>
.img-container{
    width: 100vw;
    height: 100px;
/* display: flex; */
}
.img-1{
    width:100px;
    /* display: flex; */
    float: left;
}
.img-2{
    width:100px;
    /* display: flex; */

    float: right;
}
.img{
    width: 100px;
}
</style>