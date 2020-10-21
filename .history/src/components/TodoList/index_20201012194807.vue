<template>
    <div>

        <div class="header">
          
          <div>  {{title}}</div>

          <div> 
              <label>
                  Filter:
                  <input type="text" v-model="seachText">
              </label>
          </div>

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
        <div :key="updateKey">
            <todo-item v-for="taskItem in list" :key="taskItem.id"
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
import uniqid from "uniqid";
    export default {
        name:"TodoList",

        components: {
            TodoItem,
        },

        props: {
            title:{
                type:String,
                default:'no title'
            },
        },

        data() {
            return {
                data,
                newTask:null,
                seachText:null,
                updateKey:0
            }
        },

        computed: {
            storeData:{
                get:function () {
                    console.log('2222');
                    const stringValueFromStore=this.updateKey&& localStorage.getItem('tasks')
                    if(stringValueFromStore)
                      return JSON.parse(stringValueFromStore)
                    else
                      return []
                },
                set:function (val) {
                    const stringRepresentation=JSON.stringify(val)
                    localStorage.setItem('tasks',stringRepresentation)
                }

            },

            list() {                
                if(!this.seachText) return this.storeData
                else
                {const text=this.seachText.toLowerCase()
                    return this.storeData.filter(item=>item.task.toLowerCase().includes(text)) }
            }
        },
        watch: {
            seachText(newValue, oldValue) {
                console.log(`${newValue} - ${oldValue}`);
            }
        },

        methods: {
            onPlan(id){
                const newArr=[...this.storeData]
                const task=newArr.find(item=>item.id===id)
                task.status='IN-PROGRES'
                this.storeData=newArr
            },
            onPostponed(id) {
                const task=this.storeData.find(item=>item.id===id)
                task.status='POSTPONED'
            },
            onDone(id){
                const task=this.storeData.find(item=>item.id===id)
                task.status='DONE'
            },
            onAdd(){

               const time=new Date()
               const newTaskOb={                    
                        id:uniqid(),
                        task:this.newTask,
                        time:`${time.getHours()}.${time.getMinutes()}`,
                        status:"NEW"                    
                }

                this.storeData=[...this.storeData,newTaskOb]
                this.updateKey++

            }
        },
    }
</script>

<style lang="css" scoped>
.header{
    display: flex;
    justify-content: space-between;
}
</style>