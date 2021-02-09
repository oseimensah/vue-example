<template>
   <div class="bg-gray-100 min-h-screen">
      <div class="max-w-7xl max-w mx-auto px-4 sm:px-6 md:px-8">
         <farmer-list-add></farmer-list-add>
      </div>
  </div>
</template>

<script>
import FarmerListAdd from '../components/FarmerListAdd.vue'
export default {
  components: { FarmerListAdd }
}
</script>

<style lang="scss" scoped>

</style>
