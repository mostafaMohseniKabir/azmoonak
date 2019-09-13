<template>
    <div>
        <v-btn
            class="button button-weight"
            color="#00DB75"
            dark
            @click="changeDialogIsOpen(true)"
            x-large
        >ایجاد آزمون
            <v-icon right>mdi-pencil</v-icon>
        </v-btn>

        <BaseDialog title="ایجاد آزمون">
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

export default {
  name: 'TheTestPage',

  components: {
    BaseDialog,
    TheCreateTest,
  },

  computed: {
    ...mapState([
        'test',
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