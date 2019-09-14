<template>
  <v-list class="result-item">
    <v-list-item @click="changeDialogIsOpen(true)">
      <v-list-item-avatar>
        <v-img :src="require('../assets/icons/test.svg')"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ result.name }}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        {{ result.score }}
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
// modules
import { mapState, mapMutations, mapActions } from 'vuex'
// components

export default {
  name: 'TheResultListItem',

  components: {
  },

  props: {
    result: { type: Object, required: true },
  },

  data: () => ({
    editable: false,
    controllerOpen: false,
  }),

  computed: mapState(['editableText', 'dialogIsOpen']),

  methods: {
    ...mapActions(['changeTodoText']),

    ...mapMutations(['changeDialogIsOpen']),

    toggleEditable(value) {
      if (value !== undefined && this.editable) this.edit()
      this.editable = value
    },

    edit() {
      const {
        todo: { id },
        editableText,
        changeTodoText,
      } = this
      changeTodoText({ id, text: editableText })
      this.editable = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.result-item {
  padding: 0px;
  border-radius: 10px;
}
</style>