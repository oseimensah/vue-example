<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-7xl max-w mx-auto px-4 sm:px-6 md:px-8">
      <farmer-list :allTodos="allTodos"></farmer-list>
    </div>
  </div>
</template>

<script>
import FarmerList from '@/components/FarmerList.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ToDoList',
  components: {
    FarmerList
  },
  computed: {
    ...mapGetters(['allTodos'])
  }
}
</script>

<style lang="scss" scoped>

</style>
