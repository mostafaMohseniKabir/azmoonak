<template>
<v-row justify="center">
  <v-dialog
    :value="dialogIsOpen"
    @input="changeDialogIsOpen"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark class="dialog">
        <v-btn icon dark @click="changeDialogIsOpen(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn dark text @click="changeDialogIsOpen(false)">{{ done }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <slot />
    </v-card>
  </v-dialog>
</v-row>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BaseDialog',

  props: {
    title: { type: String, required: true },
    done: { type: String, required: false },
  },

  computed: mapState(['dialogIsOpen']),

  methods: {
      ...mapMutations(['changeDialogIsOpen']),
  },
}
</script>

<style lang="scss" scoped>

.dialog {
  margin-top: 85px;
}
</style>