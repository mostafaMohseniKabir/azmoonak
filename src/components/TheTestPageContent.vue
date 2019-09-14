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
      v-else-if="!isAdmin && !finalizeTest"
      class="test-page-content_no-test"
    >
      هنوز آزمونی وجود ندارد
    </p>

    <div
      v-else
      v-for="(testItem, index) in test"
      :key="testItem.id"
    >
      <div class="test-page-content_question-container">
        <p dir="auto" class="test-page-content_question"><strong dir="auto">-{{ index + 1 }}</strong> {{ testItem.question }}</p>
        <p dir="auto" class="test-page-content_option"><strong dir="auto">(۱</strong> {{ testItem.firstOption }}</p>
        <p dir="auto" class="test-page-content_option"><strong dir="auto">(۲</strong> {{ testItem.secondOption }}</p>
        <p dir="auto" class="test-page-content_option"><strong dir="auto">(۳</strong> {{ testItem.thirdOption }}</p>
        <p dir="auto" class="test-page-content_option"><strong dir="auto">(۴</strong> {{ testItem.forthOption }}</p>
      </div>
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
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  padding-top: 100px;
}

.test-page-content_button {
  font-weight: bold;
  margin: auto;
  margin-top: 60%;
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

.test-page-content_question-container {
  margin-bottom: 10px;
}

.test-page-content_question {
  margin: 10px;
  font-weight: bold;
}

.test-page-content_option {
  margin:10px;
}
</style>