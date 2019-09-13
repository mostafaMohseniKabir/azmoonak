<template>
  <img class="logo" :src="require('../../assets/icons/test.svg')" />
</template>

<script>
export default {
  name: 'BaseLogo',
}
</script>

<style lang="scss" scoped>
@import '../../helper/style/_variable.scss';
@import '../../helper/style/_mixin.scss';

.logo {
  width: 30px;
  height: 30px;
  margin: auto;
}

.icon-line {
  stroke: #ffffff;
  stroke-width: 4;
}

.add-icon {
  transition: transform 0.5s;
}

.close-icon {
  transform: rotate(495deg);
  transition: transform 0.5s;
}
</style>
