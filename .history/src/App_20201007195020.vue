<template>
  <div id="app">
    <todo-item 
     task='my task'
     time='18.10'
     status='NEW'/>
  </div>
</template>

<script>
import TodoItem from "./components/TodoList/TodoItem";
export default {
  name: 'App',
  components: {
    TodoItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
