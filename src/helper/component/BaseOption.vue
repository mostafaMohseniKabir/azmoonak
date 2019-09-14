<template>
  <div class="base-option_container">
    <p dir="auto" class="base-option_text"><strong dir="auto">({{ number }}</strong> {{ text }}</p>
    <v-radio class="base-option_radio" :value="value"></v-radio>
  </div>
</template>

<script>
export default {
  name: 'BaseOption',

  props: {
    text: { type: String, required: true },
    value: { type: String, required: true },
    number: { type: Number, required: true },
  },
}
</script>

<style lang="scss" scoped>
// @import '../helper/style/_variable.scss';

.base-option_container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 0px 5px;
}

.base-option_text {
    margin: 10px 10px 0px -5px;
    text-align: right;
}

.base-option_radio {
  margin: 0px;
}
</style>