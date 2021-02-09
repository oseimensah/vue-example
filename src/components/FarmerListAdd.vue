<template>
   <div class="py-12">
      <h3 class="ml-8 pl-3 capitalize text-base font-semibold tracking-wider leading-5">Create new TO-DO</h3>
      <div class="w-2/3 px-8 py-8 sm:px-12">
         <div class="bg-white rounded-md shadow-md p-8">
            <div>
               <label for="title" class="block capitalize text-sm font-medium text-gray-700">title / label</label>
               <div class="mt-1">
               <input type="text" v-model="todo.title" name="title" id="title" placeholder="Title / Label" autocomplete="given-name" class="block w-full shadow-sm focus:shadow-md p-2 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md">
               </div>
            </div>
            <div class="sm:col-span-2 mt-3">
               <div class="flex justify-between">
               <label for="activity" class="block text-sm font-medium text-gray-700">Activity</label>
               </div>
               <div class="mt-1">
                  <textarea v-model="todo.content" id="activity" name="activity" aria-describedby="activity" rows="6" class="block w-full shadow-sm focus:shadow-md sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border p-3"></textarea>
               </div>
            </div>

            <div class="flex justify-between mt-8">
               <button @click="addTodoIn" type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  save
               </button>
               <router-link to="/list">
                  <button type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     back
                  </button>
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      todo: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodoIn () {
      this.addTodo({
        id: this.$store.state.todos.length + 1,
        title: this.todo.title,
        content: this.todo.content
      }
      )
      this.todo = {
        title: '',
        content: ''
      }
      this.$router.push({ name: 'To-Do' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
