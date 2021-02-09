<template>
   <div class="py-12">
      <h3 class="ml-8 pl-3 capitalize text-base font-semibold tracking-wider leading-5">Edit item</h3>
      <div class="w-2/3 px-8 py-8 sm:px-12">
         <div class="bg-white rounded-md shadow-md p-8">
            <div>
               <label for="title" class="block capitalize text-sm font-medium text-gray-700">title / label</label>
               <div class="mt-1">
               <input v-model="mdata.title" type="text" name="title" id="title" placeholder="Title / Label" autocomplete="given-name" class="block w-full shadow-sm focus:shadow-md p-2 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md">
               </div>
            </div>
            <div class="sm:col-span-2 mt-3">
               <div class="flex justify-between">
               <label for="activity" class="block text-sm font-medium text-gray-700">Activity</label>
               </div>
               <div class="mt-1">
                  <textarea v-model="mdata.content" id="activity" name="activity" aria-describedby="activity" rows="6" class="block w-full shadow-sm focus:shadow-md sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border p-3"></textarea>
               </div>
            </div>

            <div class="flex justify-between mt-8">
               <button @click="editTodoIn" type="button" class="uppercase px-8 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  save
               </button>
               <router-link to="/list">
                  <button type="button" class="uppercase px-8 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
  props: ['mdata'],
  data () {
    return {
      id: null,
      title: null,
      content: null
    }
  },
  methods: {
    ...mapActions(['editTodo']),
    editTodoIn () {
      this.editTodo({
        id: this.mdata.id,
        title: this.mdata.title,
        content: this.mdata.content
      }
      )
      this.$router.push({ name: 'To-Do' })
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
