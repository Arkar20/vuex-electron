<template>
    <div class="container">
        <h4>Add New Todo List</h4>
        <form class="form-group" @submit.prevent="addnewtodo">
            <input v-model="title" class="form-control"/>
            <button  type="submit" class="btn btn-dark m-2">
               
                Add</button>
                
                <Filtertodo />
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex"
import Filtertodo from '@/components/Filtertodo'
    export default {
        components:{Filtertodo},
        data(){
            return {
                title:''
            }
        },
        
        methods:{
            ...mapActions(['addtodo']),
    addnewtodo(){
        this.addtodo(this.title)
        this.title=''
    }
    },
        
    }
</script>

<style lang="scss" scoped>

</style>