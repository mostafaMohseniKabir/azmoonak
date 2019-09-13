<template>
  <div>
    <TheAppBar/>

    <router-view />
    <!-- <TheLoading v-if="!isComponentLoaded || !isDataFetched"/> -->

    <BaseDialog />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// components
// import TheLoading from './components/TheLoading'
const TheAppBar = () => import('./components/TheAppBar')
const BaseDialog = () => import('./helper/component/BaseDialog')
// helpers
import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// W
const { W } = window

export default {
  name: 'App',

  store,

  components: {
    // TheLoading,
    TheAppBar,
    BaseDialog,
  },

  computed: mapState(['page', 'isDataFetched', 'isComponentLoaded']),

  created() {
    W && webliteHandler(this)
    this.$router.push('/')
    
  },
}
</script>