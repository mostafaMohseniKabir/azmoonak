<template>
  <v-dialog
    :value="dialogIsOpen"
    @input="changeDialogIsOpen"
    :fullscreen="isFull"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="#343A6E">
        <v-btn icon dark @click="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>

      <slot />
    </v-card>
  </v-dialog>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BaseDialog',

  props: {
    title: { type: String, required: true },
    isFull: { type: Boolean, default: false}
  },

  computed: mapState(['dialogIsOpen']),

  methods: {
      ...mapMutations(['changeDialogIsOpen']),

      handleClose() {
        this.changeDialogIsOpen(false)
        this.$router.push('/')
      }
  },
}
</script>