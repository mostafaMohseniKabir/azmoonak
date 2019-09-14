<template>
  <div class="test-page-content_container">
    <v-btn
        v-if="isAdmin && !finalizeTest"
        class="test-page-content_button"
        color="#00DB75"
        dark
        @click="changeDialogIsOpen(true)"
        x-large
    >ایجاد آزمون
        <v-icon right>mdi-pencil</v-icon>
    </v-btn>

    <p
      v-if="!isAdmin && !finalizeTest"
      class="test-page-content_no-test"
    >
      هنوز آزمونی وجود ندارد
    </p>

    <template v-if="finalizeTest && !userResult">
      <div
        v-for="(testItem, index) in test"
        :key="testItem.id"
      >
        <TheTestPageContentQuestions :testItem="testItem" :index="index" />
      </div>
    </template>

    <v-btn
        v-if="!isAdmin && finalizeTest && !userResult"
        class="test-page-content_button"
        color="#00DB75"
        dark
        @click="handleSubmitTest"
        x-large
    >اتمام آزمون
        <v-icon right>mdi-flag-checkered</v-icon>
    </v-btn>

    <p
      v-if="!isAdmin && userResult"
      class="test-page-content_no-test"
    >
      شما در آزمون شرکت کرده‌اید
    </p>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations, mapActions } from 'vuex'
// components
const TheTestPageContentQuestions = () => import('./TheTestPageContentQuestions')
// helpers
import { findResult } from '../helper/function/time'

const { R } = window

export default {
  name: 'TheTestPageContent',

  components: {
    TheTestPageContentQuestions,
  },

  computed: {
    ...mapState([
        'test', 'finalizeTest', 'isAdmin', 'results', 'userInfo', 'userResult',
    ]),

    // userResult() {
    //   return R.not(R.isEmpty(findResult(this.results, this.userInfo)))
    // },
  },

  methods: {
    ...mapMutations([
        'changeDialogIsOpen',
      ]),

      ...mapActions(['addResult']),

      handleSubmitTest() {
        this.addResult()
      },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.test-page-content_container {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  padding-top: 90px;
}

.test-page-content_button {
  font-weight: bold;
  margin: auto;
  margin-top: 60%;
}

.test-page-content_no-test {
  margin: auto;
  margin-top: 60%;
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