<template>
  <div>
    <TheAppBar/>

    <router-view />
  </div>
</template>

<script>
// components
const TheAppBar = () => import('./components/TheAppBar')
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
    TheAppBar,
  },

  created() {
    W && webliteHandler(this)
    this.$router.push('/')
  },
}
</script>