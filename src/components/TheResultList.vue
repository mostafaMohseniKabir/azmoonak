<template>
  <div>
    <!-- result items -->
    <ul class="resultList-scroll-area">
      <transition-group class="transition" name="result" tag="div" leave-to-class="leave-to">
        <TheResultListItem
          v-for="(result, index) in sortedResults"
          :key="result.userInfo.id"
          :result="result"
          :index="index"
          class="result-item"
        />
      </transition-group>

      <p 
        v-if="!results.length"
        class="result-list-content_no-result"
      >
        هنوز نتیجه ای ثبت نشده است
      </p>
    </ul>

    <BaseDialog title="جزئیات عملکرد" isFull>
      <div class="result-list_card">
        <div class="result-item_more_top">
          <div class="result-item_more_top_text">
            <p class="result-item_more_top_title">{{ fullName }}</p>
            <p class="result-item_more_top_title2">{{ activeResult && activeResult.userInfo.username }}</p>
          </div>
          <img class="result-list_more_top_avatar" :src="require('../assets/mostafa.jpg')" />
        </div>

        <div class="result-item_more_mid">
          <div class="result-item_more_number_rank">
            <p class="result-item_more_number_title">رتبه</p>
            <p class="result-item_more_number_text">{{ activeResult && activeResult.index + 1 }}</p>     
          </div>
          <div class="result-item_more_number_score">
          <p class="result-item_more_number_title">درصد</p>
          <p class="result-item_more_number_text">{{ activeResult && activeResult.examInfo.percentage }}</p>       
          </div>
        </div>

        <div class="result-item_more_bot">
          <div class="result-item_more_exam_correct">
            <p class="result-item_more_number_title_examInfo">تعداد درست</p>
            <p class="result-item_more_number_text_examInfo">{{ activeResult && activeResult.examInfo.corrects }}</p>     
          </div>
          <div class="result-item_more_exam_left">
          <p class="result-item_more_number_title_examInfo">تعداد غلط</p>
          <p class="result-item_more_number_text_examInfo">{{ activeResult && activeResult.examInfo.wrongs }}</p>       
          </div>
          <div class="result-item_more_exam_left">
          <p class="result-item_more_number_title_examInfo">تعداد نزده</p>
          <p class="result-item_more_number_text_examInfo">{{ activeResult && activeResult.examInfo.empties }}</p>       
          </div>
        </div>
      </div>
    </BaseDialog>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from "vuex"
// components
import TheResultListItem from "./TheResultListItem.vue"
import BaseDialog from "../helper/component/BaseDialog"

const { R } = window

export default {
  name: "TheResultList",

  components: {
    TheResultListItem,
    BaseDialog,
  },

  computed: {
    ...mapState(["results", "activeResult"]),

    fullName() {
      return (
        this.activeResult && (this.activeResult.userInfo.firstname +
        " " +
        this.activeResult.userInfo.lastname)
      )
    },

    sortedResults() {
      return R.sort((a, b) => b.examInfo.percentage - a.examInfo.percentage, this.results)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../helper/style/_variable.scss";

.result-item {
  // border: 1px solid #707070;
  display: flex;
  transition: all 0.5s ease;
}

.result-list_card {
  // background-color: red;
  // width: 90%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  // height: 400px;
  border: 1px solid #707070;
  border-radius: 5px;
}

.result-item_more_top {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #5897D1;
  color: white;
}

.result-list_more_top_avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.result-item_more_top_text {
  display: flex;
  flex-direction: column;
}

.result-item_more_top_title {
  font-size: $font-size-medium;
  margin-right: 15px;
  font-weight: $font-weight-bold;
}

.result-item_more_top_title2 {
  font-size: $font-size-small;
  margin-right: 15px;
  margin-top: 5px;
  text-align: right;
}

.result-item_more_mid {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #00DBE4;
}


.result-item_more_number {
  // display: flex;
  // flex-direction: row-reverse;
  margin: 15px;
}

.result-item_more_number_text , .result-item_more_number_title {
  font-size: $font-size-large;
  margin-top: 7px;
}

.result-item_more_number_score {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
}

.result-item_more_number_rank {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-item_more_bot {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #00DB75;
}

.result-item_more_exam_correct {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-item_more_exam_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
}

.result-item_more_number_text_examInfo , .result-item_more_number_title_examInfo {
  font-size: $font-size-small;
  margin-top: 7px;
}
// .result-item:first-of-type {
//   font-size: 30px;
// }

.result-enter {
  opacity: 0;
  transform: translateY(-300px);
}

.leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.remove-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
}

.vit-leave-to,
.list-left-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.done-leave-to,
.list-right-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

.result-leave-active {
  width: 100%;
  display: block;
  padding: 5px 10px;
  position: absolute;
  box-sizing: border-box;
}

.resultList-scroll-area {
  position: fixed;
  top: 105px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: overlay;
  transition: all 0.5s ease;
}

.resultList-scroll-area::-webkit-scrollbar-track {
  background-color: $font-color-light-primary;
}

.resultList-scroll-area::-webkit-scrollbar {
  width: 7px;
  background-color: $font-color-light-primary;
  border-radius: 20px;
}

.resultList-scroll-area::-webkit-scrollbar-thumb {
  background: rgba(0, 150, 227, 0.5);
  border-radius: 40px;
  border: 2px solid $font-color-light-primary;
}

.resultList-scroll-area::-webkit-scrollbar-thumb:hover {
  border: 0px solid $font-color-light-primary;
}

.result-list-content_no-result {
  margin: 0 20px;
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
