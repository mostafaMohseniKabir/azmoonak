<template>
    <div>
        <p class="header">{{ test.length + 1 }} سوال<p>

        <v-divider></v-divider>

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

            <v-btn
                class="button-weight"
                color="#00DB75"
                dark
                @click="handleNext"
            >سوال جدید</v-btn>
            <v-btn
                class="button-weight"
                color="#00DB75"
                dark
                @click="handleCreateTest"
            >اتمام</v-btn>
        </form>
    </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TheCreateTest',

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
        'test',
    ]),
  },

  methods: {
      ...mapMutations([
          'changeDialogIsOpen',
          'addQuestion',
          'changeQuestion',
          'changeFirstOption',
          'changeSecondOption',
          'changeThirdOption',
          'changeForthOption',
          'changeAnswer',
          'clearInputs',
        ]),

      handleNext () {
          this.addQuestion()
          this.changeQuestion('')
          this.changeFirstOption('')
          this.changeSecondOption('')
          this.changeThirdOption('')
          this.changeForthOption('')
          this.changeAnswer('گزینه اول')
      },

      handleCreateTest() {
        this.changeDialogIsOpen(false)
        this.addQuestion()
        this.addTest()
      },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.header {
    font-weight: bold;
    text-align: end;
    margin: 15px;
    font-size: 30px;
}

.button {
  margin: auto 100px;
  margin-top: 300px;
}

.button-weight {
    font-weight: bold;
    margin-right: 10px;
}

.form {
    margin: 10px;
}
</style>
