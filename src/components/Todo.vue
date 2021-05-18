<template>
    <div class="container">
        <h3>Todo</h3>
        <div class="todo row">
        <div class="todos col-md-3" v-for="todo in alltodos" v-bind:key="todo.id">
            <div  class="todo card">
                <div class="card-header" v-text="todo.title"></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
    export default {    
        methods:{
            ...mapActions(['getalltodos'])
        },
        computed:
           {... mapGetters(['alltodos'])
           },
        created(){
            this.getalltodos()
            }

    }
</script>

<style lang="css" scoped>

</style>