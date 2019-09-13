<template>
  <v-tabs
    class="tab"
    background-color="#00DB75"
    color="#fff"
    grow
    :value="page"
    @change="changePage"
  >
    <v-tabs-slider color="#EF487D"></v-tabs-slider>

    <v-tab to="/result" class="tab-item">نتایج</v-tab>
    <v-tab to="/" class="tab-item">آزمون</v-tab>
  </v-tabs>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components

export default {
  name: 'TheAppBarTabs',

  components: {
  },

  computed: mapState(['page']),

  methods: {
    ...mapMutations(['changePage']),
  }
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

@font-face {
    font-family: Lalezar;
    font-size: 35px;
    src: url('../../public/fonts/woff/rtlfontwebblack.woff') format('woff');
    font-display: swap;
  }

.tab {
  height: 50px;
  margin-top: 2px;
  color: $color-primary;
}

.tab-item {
  font-family: Lalezar;
  font-size: 30px;
}
</style>