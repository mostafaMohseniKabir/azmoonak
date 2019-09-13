<template>
    <div>
        <v-btn class="button" color="primary" dark @click="changeDialogIsOpen(true)">ایجاد آزمون
            <v-icon right>mdi-pencil</v-icon>
        </v-btn>

        <BaseDialog title="ایجاد آزمون" done="ذخیره">
            <form class="form">
                <v-textarea
                    :value="question"
                    @input="changeQuestion"
                    append-icon="mdi-help-box"
                    :counter="100"
                    label="صورت سوال"
                    dir="auto"
                    rows=3
                    required
                    no-resize
                />
                <v-textarea
                    :value="firstOption"
                    @input="changeFirstOption"
                    append-icon="mdi-comment"
                    label="گزینه اول"
                    dir="auto"
                    rows=2
                    required
                    no-resize
                />
                <v-textarea
                    :value="secondOption"
                    @input="changeSecondOption"
                    append-icon="mdi-comment"
                    label="گزینه دوم"
                    dir="auto"
                    rows=2
                    required
                    no-resize
                />
                <v-textarea
                    :value="thirdOption"
                    @input="changeThirdOption"
                    append-icon="mdi-comment"
                    label="گزینه سوم"
                    dir="auto"
                    rows=2
                    required
                    no-resize
                />
                <v-textarea
                    :value="forthOption"
                    @input="changeForthOption"
                    append-icon="mdi-comment"
                    label="گزینه چهارم"
                    dir="auto"
                    rows=2
                    required
                    no-resize
                />
                <v-select
                    :value="answer"
                    @input="changeAnswer"
                    append-icon="mdi-forum"
                    :items="items"
                    label="پاسخ صحیح"
                    dir="auto"
                    required
                />

                <v-btn @click="handleNext">سوال بعدی</v-btn>
            </form>
        </BaseDialog>
    </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
const BaseDialog = () => import('../helper/component/BaseDialog')

export default {
  name: 'TheTest',

  components: {
    BaseDialog,
  },

  data: () => ({
      items: [
        'گزینه اول',
        'گزینه دوم',
        'گزینه سوم',
        'گزینه چهارم',
      ],
    }),

  computed: {
    ...mapState([
        'question',
        'firstOption',
        'secondOption',
        'thirdOption',
        'forthOption',
        'answer',
    ]),
  },

  methods: {
      ...mapMutations([
          'changeDialogIsOpen',
          'changeQuestion',
          'changeFirstOption',
          'changeSecondOption',
          'changeThirdOption',
          'changeForthOption',
          'changeAnswer',
          'clearInputs',
        ]),

      handleNext () {
          this.changeQuestion('')
          this.changeFirstOption('')
          this.changeSecondOption('')
          this.changeThirdOption('')
          this.changeForthOption('')
          this.changeAnswer('گزینه اول')
      },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.button {
  margin: auto 100px;
  margin-top: 300px;
}

.form {
    margin: 10px;
}

</style>
