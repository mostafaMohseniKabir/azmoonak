<template>
  <div>
    
    <div class="test-page-content_question-container">
      <div class="count"> 
        <p dir="auto" class="test-page-content_question"> {{ index + 1 }} </p>
      </div>
      <p class="kind">{{ testItem.question }}</p>
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
  padding: 10px;
  margin-bottom: 5px;
  width: 100%;
  background-color: white;
  // border: 1px solid #707070;
  border-radius: 5px;
}

.test-page-content_question {
  font-size: 25px;
  text-align: right;
  font-weight: $font-weight-bold;
  margin: 1px 3px 0px 0px;
}


.kind {
  margin-top: 10px;
  text-align: right;
}

.count {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 30px;
  // align-items: center;
 
}

.count p {
  width: 23px;
  height: 25px;;
  text-align: center;
  padding-top: 2px;
   background: rgb(0, 219, 117);
  background: linear-gradient(
    133deg,
    rgba(0, 219, 117, 1) 0%,
    rgba(0, 255, 138, 1) 100%
  );
   color: white;
  //  margin-right: 5px;
   border-radius: 6px;
  
}

.test-page-content_options {
  justify-content: flex-end;
}
</style>