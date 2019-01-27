<template>
  <v-dialog v-model="warningModal"
            width="500">
    <v-card data-cy="delete-modal-card">
      <v-card-title class="headline grey lighten-2"
                    primary-title>
        Deleteing ????
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn data-cy="delete-modal-btn-no"
               color="primary"
               @click="closeModal">
          NOOOOOO
        </v-btn>
        <v-btn data-cy="delete-modal-btn-yes"
               color="error"
               @click="alert('yes')">
          YEEEESSS
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 's-delete-warning-modal',
  computed: {
    ...mapState(['warningModal'])
  },
  methods: {
    ...mapActions(['setWarningModal']),
    closeModal () {
      this.setWarningModal(false)
    }
  }
}
</script>
