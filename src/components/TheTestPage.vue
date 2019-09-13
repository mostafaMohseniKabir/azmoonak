<template>
    <div>
        <v-btn
            v-if="!finalizeTest"
            class="button button-weight"
            color="#00DB75"
            dark
            @click="changeDialogIsOpen(true)"
            x-large
        >ایجاد آزمون
            <v-icon right>mdi-pencil</v-icon>
        </v-btn>

        <TheTestPageContent v-if="finalizeTest" />

        <BaseDialog v-if="!finalizeTest" title="ایجاد آزمون">
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
.button {
  margin: auto 100px;
  margin-top: 300px;
}

.button-weight {
    font-weight: bold;
    margin-right: 10px;
}
</style>