<template>
  <div>
    <!-- todo items -->
    <ul class="resultList-scroll-area">
        <transition-group
          class="transition"
          name="todo"
          tag="div"
          :leave-to-class="currentAction ? `${currentAction}-leave-to` : 'leave-to'"
        >
          <TheResultListItem v-for="result in results" :key="result.id" :result="result" class="result-item" />
        </transition-group>
    </ul>

    <!-- <BaseDialog title="جزئیات عملکرد">
      نام: مصطفی
      نام خانودادگی: محسنی کبیر
      درصد: 100%

    </BaseDialog> -->

  </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
import TheResultListItem from './TheResultListItem.vue'
// const BaseDialog = () => import('../helper/component/BaseDialog')

export default {
  name: 'TheResultList',

  components: {
    TheResultListItem,
    // BaseDialog,
  },

  computed: {
    ...mapState(['currentAction', 'results']),
  },

  mounted() {
    this.changeIsComponentLoaded(true)
    console.log(this.result)
  },

  methods: {
    ...mapMutations(['changeIsComponentLoaded']),
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.result-item {
  // border: 1px solid #707070;
  display: flex;
  transition: all 0.5s ease;
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
</style>
