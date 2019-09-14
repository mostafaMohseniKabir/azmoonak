<template>
  <div class="test-page-content_question-container">
    <p dir="auto" class="test-page-content_question"><strong dir="auto">-{{ index + 1 }}</strong> {{ testItem.question }}</p>

    <v-radio-group
      class="test-page-content_options"
      :value="radios"
      @change="handleRadioChange"
      :mandatory="false"
    >
        <BaseOption :text="testItem.firstOption" value="firstOption" number="۱" />
        <BaseOption :text="testItem.secondOption" value="secondOption" number="۲" />
        <BaseOption :text="testItem.thirdOption" value="thirdOption" number="۳" />
        <BaseOption :text="testItem.forthOption" value="forthOption" number="۴" />
    </v-radio-group>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
const BaseOption = () => import('../helper/component/BaseOption')

const { R } = window

export default {
  name: 'TheTestPageContentQuestions',

  components: {
    BaseOption,
  },

  props: {
    index: { type: Number, required: true },
    testItem: { type: Object, required: true },
  },

  data: () => ({
    radios: '',
  }),

  computed: {
    ...mapState([
        'test',
    ]),
  },

  methods: {
    ...mapMutations([
        'changeTest',
      ]),

    handleRadioChange(value) {
      this.radios = value
      const obj = R.find(R.propEq('id', this.testItem.id), this.test)
      const newObj = R.assoc('userAnswer', value, obj)
      const newTest = R.map(item => item.id === this.testItem.id ? newObj : item)(this.test)
      this.changeTest(newTest)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.test-page-content_question-container {
  margin-bottom: 10px;
}

.test-page-content_question {
  margin: 10px 10px 10px 0px;
  font-weight: bold;
}

.test-page-content_options {
  justify-content: flex-end;
}
</style>