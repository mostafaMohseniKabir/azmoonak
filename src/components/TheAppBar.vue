<template>
  <div class="app-bar">
    <div class="header">
      <div
        class="main"
      >
        <!-- Title -->
        <div key="title" class="title">
          آزمون جامع دین و زندگی دهم
        </div>
      </div>

      <BaseLogo />
    </div>

    <TheAppBarTabs />
  </div>
</template>

<script>
// components
import BaseLogo from '../helper/component/BaseLogo'
import TheAppBarTabs from './TheAppBarTabs'

export default {
  name: 'TheAppBar',

  components: {
    BaseLogo,
    TheAppBarTabs,
  },

  computed: {
    title() {
      return this.$store.state.title
    },
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.app-bar {
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: $font-color-light-primary;
}

.header {
  width: 100%;
  height: 35px;
  display: flex;
  background-color: $color-primary;
}

.main {
  @include flex-center;

  width: calc(100% - 50px);
}

.title {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  color: $font-color-dark-secondary;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: initial;
}
</style>
