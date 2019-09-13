<template>
  <v-dialog :value="dialogIsOpen" @input="changeDialogIsOpen" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="changeDialogIsOpen(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn dark text @click="changeDialogIsOpen(false)">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BaseDialog',

  computed: mapState(['dialogIsOpen']),

  methods: {
      ...mapMutations(['changeDialogIsOpen']),
  },
}
</script>