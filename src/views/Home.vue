<template>
  <div class="home bg-gray-100 min-h-screen">
    <div class="max-w-7xl max-w mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center py-12 lg:px-8 overflow-hidden">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" alt="Workflow" />
        <h2 class="mt-8 text-center text-2xl leading-6 font-bold text-gray-900 uppercase">
          sign in
        </h2>
      </div>

      <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div class="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div class="col-span-6 sm:col-span-3 mx-3">
              <label for="username" class="block text-sm font-medium leading-5 text-gray-700">
                Username
              </label>
              <input v-if="edit" id="username" v-model="getFarmer.username" type="text" name="username" class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="kelvin_oduro" autocomplete="username" autofocus />
              <p v-else class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{ getFarmer.username }}</p>
            </div>

            <div class="col-span-6 sm:col-span-3 mx-3">
              <label for="fullname" class="block text-sm font-medium leading-5 text-gray-700">
                Full Name
              </label>
              <input v-if="edit" id="fullname" v-model="getFarmer.fullname" type="text" name="fullname" class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Kelvin Ampong Oduro" autocomplete="fullname" autofocus />
              <p v-else class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{ getFarmer.fullname }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6 mt-8">
            <div class="col-span-6 sm:col-span-3 mx-3">
              <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <input v-if="edit" id="password" v-model="getFarmer.password" type="password" name="password" class="appearance-none rounded-md shadow-sm mt-1 block w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="*********" />
              <p v-else class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{ getFarmer.password }}</p>
            </div>

            <div class="col-span-6 sm:col-span-3 mx-3">
              <label for="location" class="block text-sm font-medium leading-5 text-gray-700">
                Location
              </label>
              <input v-if="edit" id="location" v-model="getFarmer.location" type="text" name="location" class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Accra" autocomplete="location" />
              <p v-else class="appearance-none block mt-1 rounded-md shadow-sm w-full p-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:shadow-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">{{ getFarmer.location }}</p>
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <button v-if="edit == false" @click.prevent="edit = true" type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              edit
            </button>
            <button v-if="edit == true" @click.prevent="editProfileIn" type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              save
            </button>
            <router-link to="/list">
              <button type="button" class="uppercase px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                TODO LIST
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      edit: false
    }
  },
  computed: {
    ...mapGetters(['getFarmer'])
  },
  methods: {
    ...mapActions(['editProfile']),
    editProfileIn () {
      this.editProfile({
        username: this.getFarmer.username,
        fullname: this.getFarmer.fullname,
        password: this.getFarmer.password,
        location: this.getFarmer.location
      }
      )
      this.edit = false
    }
  }
}
</script>
