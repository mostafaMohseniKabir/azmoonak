<template>
    <div>
        <TheTestPageContent v-if="isComponentLoaded || isDataFetched" />

        <TheLoading v-if="!isComponentLoaded || !isDataFetched"/>

        <BaseDialog v-if="!finalizeTest" title="ایجاد آزمون" isFull>
            <TheCreateTest />
        </BaseDialog>
    </div>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
const BaseDialog = () => import('../helper/component/BaseDialog')
const TheCreateTest = () => import('./TheCreateTest')
const TheTestPageContent = () => import('./TheTestPageContent')

export default {
  name: 'TheTestPage',

  components: {
    BaseDialog,
    TheCreateTest,
    TheTestPageContent,
  },

  computed: {
    ...mapState([
        'test',
        'finalizeTest',
        'isAdmin',
        'isDataFetched',
        'isComponentLoaded',
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
.test-page_button {
  margin-top: 300px;
  width: 50%;
}

.test-page_button-weight {
    font-weight: bold;
}
</style>