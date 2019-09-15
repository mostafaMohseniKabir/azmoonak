<template>
    <div>
        <p class="create-test_header">{{ test.length + 1 }} سوال<p>

        <v-divider></v-divider>

        <form class="create-test_form">
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

            <v-btn
                class="create-test_button-weight"
                color="#00DB75"
                dark
                @click="handleNext"
            >سوال جدید</v-btn>
            <v-btn
                class="create-test_button-weight"
                color="#00DB75"
                dark
                @click="handleCreateTest"
            >اتمام</v-btn>
        </form>
    </div>
</template>

<script>
// modules
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'TheCreateTest',

  data: () => ({
      items: [
          {
            text: 'گزینه اول',
            value: 'firstOption'
          },
          {
            text: 'گزینه دوم',
            value: 'secondOption'
          },
          {
            text: 'گزینه سوم',
            value: 'thirdOption'
          },
          {
            text: 'گزینه چهارم',
            value: 'forthOption'
          },
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
        'test',
    ]),
  },

  methods: {
      ...mapMutations([
          'changeDialogIsOpen',
          'changeFinalizeTest',
          'addQuestion',
          'changeQuestion',
          'changeFirstOption',
          'changeSecondOption',
          'changeThirdOption',
          'changeForthOption',
          'changeAnswer',
          'clearInputs',
        ]),

        ...mapActions(['addTest']),

      handleNext() {
          this.addQuestion()
          this.changeQuestion('')
          this.changeFirstOption('')
          this.changeSecondOption('')
          this.changeThirdOption('')
          this.changeForthOption('')
          this.changeAnswer('firstOption')
      },

      handleCreateTest() {
        this.changeDialogIsOpen(false)
        this.changeFinalizeTest(true)
        this.addQuestion()
        this.addTest()
      },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.create-test_header {
    font-weight: bold;
    text-align: end;
    margin: 15px;
    font-size: 30px;
}

.create-test_button {
  margin: auto 100px;
  margin-top: 300px;
}

.create-test_button-weight {
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 10px;
}

.create-test_form {
    margin: 0px 10px;
}
</style>
