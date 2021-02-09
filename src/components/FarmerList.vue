<template>
   <div class="py-12">
      <div class="flex justify-end">
         <router-link to="/add-list">
            <button type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              create new
            </button>
         </router-link>
      </div>
      <h3 class="uppercase text-base font-semibold tracking-wider leading-5">Farmer List</h3>
      <div class="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6 my-8">
         <div v-for="todo in allTodos" :key="todo.id" class="col-span-6 sm:col-span-3 bg-white rounded-md sm:mx-3 shadow-md m-3">
            <div class="border-b border-gray-100 p-3">
               <div class="flex justify-between items-center flex-wrap sm:flex-nowrap">
                  <div class="ml-3 mt-2">
                     <h3 class="text-lg leading-6 font-medium text-gray-900">
                     {{ todo.id != null ? todo.id : 'N/A' }}
                     </h3>
                  </div>
                  <div class="ml-4 mt-2 flex-shrink-0 mr-3">
                     <router-link :to="{ name: 'EditItem', params: { id: 1 } }">
                      <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit
                      </button>
                     </router-link>
                     <button @click.prevent="deleteTodo(todo.id)" type="button" class="relative inline-flex items-center px-4 ml-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Delete
                      </button>
                  </div>
               </div>
            </div>
            <div class="mx-3 p-3 mb-8">
               <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ todo.title }}
               </h3>
               <p class="mt-2 text-base text-gray-500 border-dotted border border-gray-200 p-3">{{ todo.content }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['allTodos'],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['deleteTodo']),
    editTodo (id) {
      this.$router.push({ name: 'EditItem' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
