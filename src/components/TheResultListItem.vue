<template>
  <div
    class="result-list_box"
    :class="{'result-list_box_self' : usernameCheck }"
    @click="handleOpenMoreInfo"
  >
    <div class="result-list_number_box" :class="{'result-list_number_box_self' : usernameCheck}">
      <p>{{ index + 1 }}</p>
    </div>
    <img class="result-list_avatar" :class="{'result-list_avatar_self' : usernameCheck}" :src="require('../assets/mostafa.jpg')" alt="test" />
    <span class="result-list_name" :class="{'result-list_name_self' : usernameCheck}">{{ fullName }}</span>
    <span class="result-list_score" :class="{'result-list_score_self' : usernameCheck}">{{ result.examInfo.percentage }}%</span>
  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from "vuex";

export default {
  name: "TheResultListItem",

  props: {
    result: { type: Object, required: true },
    index: { type: Number, required: true }
  },

  computed: {
    ...mapState([ "userInfo", "activeResult" ]),

    usernameCheck() {
      return this.result.userInfo.username === this.userInfo.username;
    },

    fullName() {
      return (
        this.result.userInfo.firstname + " " + this.result.userInfo.lastname 
      );
    }
  },

  methods: {
    ...mapMutations(["changeDialogIsOpen", "changeActiveResult"]),

    handleOpenMoreInfo() {
      this.changeActiveResult({ ...this.result, index: this.index })
      this.changeDialogIsOpen(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../helper/style/_variable.scss";

.result-list_box {
  padding: 0px;
  border-radius: 5px;
  background-color: #fff;
  height: 60px;
  width: 92%;
  margin: 10px 15px;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
}

.result-list_box_self {
  box-shadow: 0px 2px 6px #000000;
  border: 3px solid $color-secondary;
}

.result-list_number_box {
  font-size: $font-size-medium;
  font-weight: $font-weight-bold;
  color: #ffffff;
  width: 38px;
  height: 60px;
  background: rgb(0, 219, 117);
  background: linear-gradient(
    133deg,
    rgba(0, 219, 117, 1) 0%,
    rgba(0, 255, 138, 1) 100%
  );
}

.result-list_number_box_self {
  height: 54px;
  background: rgb(239,72,125);
  background: linear-gradient(133deg, rgba(239,72,125,1) 0%, rgba(255,102,140,1) 100%); 
}

.result-list_number_box p {
  padding: 13px;
  margin-top: 5px;
}

.result-list_avatar {
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid $color-primary;
}

.result-list_avatar_self {
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid $color-secondary;
}

.result-list_name {
  font-size: $font-size-small;
  margin-right: 5px;
}

.result-list_name_self {
  font-weight: $font-weight-bold
}

.result-list_score {
  position: absolute;
  left: 25px;
  font-size: $font-size-medium;
  font-weight: $font-weight-normal;
  color: $color-secondary;
}

.result-list_score_self {
  font-weight: $font-weight-bold;
}
</style>