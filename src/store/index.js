import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'Precise 1',
        content: 'The precise account number aspect one(1)'
      },
      {
        id: 2,
        title: 'Precise 2',
        content: 'The precise account number aspect two(2)'
      },
      {
        id: 3,
        title: 'Precise 3',
        content: 'The precise account number aspect three(3)'
      },
      {
        id: 4,
        title: 'Precise 4',
        content: 'The precise account number aspect four(4)'
      }
    ],
    farmer: {
      username: 'potterz',
      fullname: 'Kwame Kyere Oduro',
      password: 'pokemon123',
      location: 'Tamale'
    }
  },
  getters: {
    allTodos: (state) => state.todos,
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    getFarmer: (state) => state.farmer
  },
  mutations: {
    add_todo (state, todo) {
      state.todos.push(todo)
    },
    delete_todo (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    edit_todo (state, todo) {
      state.todos.findIndex(t => t.id === todo.id)
    },
    edit_profile (state, profile) {
      state.farmer = profile
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('add_todo', todo)
    },
    deleteTodo ({ commit }, id) {
      commit('delete_todo', id)
    },
    editTodo ({ commit }, todo) {
      commit('edit_todo', todo)
    },
    editProfile ({ commit }, profile) {
      commit('edit_profile', profile)
    }
  },
  modules: {
  }
})
