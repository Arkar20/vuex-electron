<template>
    <div class="container">
        <h3>Todo</h3>
        <div class="d-flex justify-content-center my-3">  

         <div class="spinner-border " role="status" v-if="loading">
                    
                </div>
        </div>
        <div class="todo row"  >
           
        <div class="todos col-md-3" v-for="todo in alltodos" v-bind:key="todo.id">
            <div  :class="classes(todo)" @dblclick="changetodo(todo)">
                <div class="card-header" v-text="todo.title"></div>
                <div class="card-footer"><i class="fas fa-trash" @click="deletetodo(todo.id)"></i></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
    export default {
        methods:{
            ...mapActions(['getalltodos','deletetodo','updatetodo']),
              classes(todo){
               console.log(todo)
               return ['todo card m-1',todo.completed?'bg-dark':'bg-danger']
           },
           changetodo(todo){
               let updata={
                   id:todo.id,
                   title:todo.title,
                   completed:!todo.completed
               }
               this.updatetodo(updata)
           }
        },
        computed:
           {... mapGetters(['alltodos','loading']),
         
           },
        created(){
            this.getalltodos()
            }

    }
</script>

<style lang="css" scoped>
.card{
    color:white;
}
.card:hover{
    padding:5px 10px;
    transition:all 1s;
    cursor: pointer;
}
</style>