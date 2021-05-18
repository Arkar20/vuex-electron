import axios from "axios"

const state = {
    todos: [{
        id:1,title:'todo'
    },
    {
        id:2,title:'todo two'
    }
    ]
}
const getters = {
    alltodos:(state)=>state.todos
}
const actions = {
    getalltodos({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
          {  console.log(res.data)
            commit('settodos',res.data)}
            )
    }
}
const mutations = {
    settodos:(state,todos)=>{state.todos=todos}
}

export default {state,getters,actions,mutations}