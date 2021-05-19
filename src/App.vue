<template>
  <div id="app">
    <Addtodo />
 
    <Todo />
  </div>
</template>

<script>
import Todo from '@/components/Todo'
import Addtodo from "@/components/AddTodo"

export default {
  name: 'App',
  components: {
  Todo,Addtodo
  }
}
</script>

<style>

</style>
