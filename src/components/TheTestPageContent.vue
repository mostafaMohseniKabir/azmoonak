<template>
  <div>
    <div
      v-for="testItem in test"
      :key="testItem.id"
    >
     
        <p dir="auto">{{ testItem.question }}</p>
        <p dir="auto">{{ testItem.firstOption }}</p>
        <p dir="auto">{{ testItem.secondOption }}</p>
        <p dir="auto">{{ testItem.thirdOption }}</p>
        <p dir="auto">{{ testItem.forthOption }}</p>
    </div>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
// const BaseDialog = () => import('../helper/component/BaseDialog')
// const TheCreateTest = () => import('./TheCreateTest')

export default {
  name: 'TheTestPageContent',

  components: {
    // BaseDialog,
    // TheCreateTest,
  },

  computed: {
    ...mapState([
        'test',
    ]),
  },

  methods: {
      ...mapMutations([
          'changeDialogIsOpen',
        ]),
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 100px;
}
</style>