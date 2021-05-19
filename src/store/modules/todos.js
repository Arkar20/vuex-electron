import axios from "axios"

const state = {
    todos: [{
        id:1,title:'todo'
    },
    {
        id:2,title:'todo two'
    }
    ],
    loading:false
}
const getters = {
    alltodos: (state) => state.todos,
    loading:(state)=>state.loading
}
const actions = {
    getalltodos({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
          {  
            commit('settodos',res.data)}
            )
    },
    addtodo({ commit }, title) {
         commit('setloading')
        axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false }).then(res => {
            commit('addtodo', res.data)
            commit('setloading')
        })
    },
    deletetodo({ commit }, id) {
         commit('setloading')
          axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
              commit('deletetodo', id)
               commit('setloading')
              
        })
    },
    filtertodo({ commit }, limit) {
        commit('setloading')
          axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`).then((res) => {
              commit('settodos', res.data)
               commit('setloading')
              
        })
    },
    updatetodo({commit },todo) {
        commit('setloading')
        axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,{title:todo.title,completed:todo.completed}).then(res => {
            commit('updatetodo', res.data)
            commit('setloading')
        })
    }
}
const mutations = {
    setloading:(state)=>{state.loading=!state.loading},
    settodos: (state, todos) => {
        state.todos = todos
    },
    addtodo: (state, data) => {
        state.laoding=true
        state.todos.unshift(data)
        
      
    },
    deletetodo: (state, id) => { state.todos = state.todos.filter(todo => todo.id !== id) },
    updatetodo:(state, data)=> {
        let index = state.todos.findIndex(todo => todo.id === data.id)
        console.log(index)
        if (index) {
            state.todos.splice(index,1,data)
        }
    }
}

export default {state,getters,actions,mutations}