<template>
  <div class="base-option_container">
    <p dir="auto" class="base-option_text"><strong dir="auto">({{ number }}</strong> {{ text }}</p>
    <v-radio
      v-if="!isAdmin"
      class="base-option_radio"
      :value="value"
      on-icon="mdi-check-box-outline"
      off-icon="mdi-checkbox-blank-outline"
    />
  </div>
</template>

<script>
// modules
import { mapState } from 'vuex'

export default {
  name: 'BaseOption',

  props: {
    text: { type: String, required: true },
    value: { type: String, required: true },
    number: { type: String, required: true },
  },

  computed: {
    ...mapState([
        'isAdmin',
    ]),
  },
}
</script>

<style lang="scss" scoped>
// @import '../helper/style/_variable.scss';

.base-option_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 5px -5px;
}

.base-option_text {
    margin: 0px 5px 0px -5px;
    text-align: right;
}

.base-option_radio {
  margin: 0px;
}
</style>