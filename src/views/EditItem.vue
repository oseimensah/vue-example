<template>
   <div class="bg-gray-100 min-h-screen">
      <div class="max-w-7xl max-w mx-auto px-4 sm:px-6 md:px-8">
         <farmer-list-edit :mdata="mTodo"></farmer-list-edit>
      </div>
  </div>
</template>

<script>
import FarmerListEdit from '../components/FarmerListEdit.vue'
// import { mapGetters } from 'vuex'
export default {
  components: { FarmerListEdit },
  data () {
    return {
      mTodo: {}
    }
  },
  // computed: {
  //   ...mapGetters({ todo: 'getTodoById' })
  // },
  mounted () {
    this.mTodo = this.$store.getters.getTodoById(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
