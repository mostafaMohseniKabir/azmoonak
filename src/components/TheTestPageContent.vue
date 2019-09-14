<template>
  <div class="test-page-content_container">
    <v-btn
        v-if="isAdmin && !finalizeTest"
        class="test-page_button test-page_button-weight"
        color="#00DB75"
        dark
        @click="changeDialogIsOpen(true)"
        x-large
    >ایجاد آزمون
        <v-icon right>mdi-pencil</v-icon>
    </v-btn>

    <p
      v-else-if="!isAdmin && !finalizeTest"
      class="test-page-content_no-test"
    >
      هنوز آزمونی وجود ندارد
    </p>

    <div
      v-else
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
        'test', 'finalizeTest', 'isAdmin',
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
@import '../helper/style/_variable.scss';

.test-page-content_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.test-page-content_no-test {
  color: white;
  text-align: center;
  border-radius: 20px;
  padding: 10px 25px;
  font-weight: 300;
  background: $font-color-dark-secondary;
  font-size: .9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}
</style>