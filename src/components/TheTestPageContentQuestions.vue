<template>
  <div class="test-page-content_question-container">
    <p dir="auto" class="test-page-content_question"><strong dir="auto">-{{ index + 1 }}</strong> {{ testItem.question }}</p>

    <v-radio-group class="test-page-content_options" v-model="radios" :mandatory="false">
        <BaseOption :text="testItem.firstOption" value="radio-1" number="۱" />
        <BaseOption :text="testItem.secondOption" value="radio-2" number="۲" />
        <BaseOption :text="testItem.thirdOption" value="radio-3" number="۳" />
        <BaseOption :text="testItem.forthOption" value="radio-4" number="۴" />
    </v-radio-group>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
const BaseOption = () => import('../helper/component/BaseOption')
// const TheCreateTest = () => import('./TheCreateTest')

export default {
  name: 'TheTestPageContentQuestions',

  components: {
    BaseOption,
    // BaseDialog,
    // TheCreateTest,
  },

  props: {
    index: { type: Number, required: true },
    testItem: { type: Object, required: true },
  },

  data: () => ({
    radios: '',
  }),

  computed: {
    // ...mapState([
    //     'test', 'finalizeTest', 'isAdmin',
    // ]),
  },

  methods: {
    //   ...mapMutations([
    //       'changeDialogIsOpen',
    //     ]),
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.test-page-content_question-container {
  margin-bottom: 10px;
}

.test-page-content_question {
  margin: 10px 5px 10px 0px;
  font-weight: bold;
}

.test-page-content_options {
  justify-content: flex-end;
}
</style>