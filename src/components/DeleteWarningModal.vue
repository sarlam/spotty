<template>
  <v-dialog v-model="warningModalModel"
            width="500">
    <v-card v-if="isAPoiSelected" data-cy="delete-modal-card">
      <v-card-title class="headline grey lighten-2"
                    primary-title>
        You are about to delete {{selectedPoi.name}}, there is no turning back, are you sure ?
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn data-cy="delete-modal-btn-no"
               color="primary"
               @click="closeModal">
          No
        </v-btn>
        <v-btn data-cy="delete-modal-btn-yes"
               color="error"
               @click="deletePoi">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 's-delete-warning-modal',
  computed: {
    ...mapState(['warningModal']),
    ...mapState('poi', ['selectedPoi']),
    ...mapGetters('poi', ['isAPoiSelected']),
    warningModalModel: {
      get () {
        return this.warningModal
      },
      set (val) {
        this.setWarningModal(val)
      }
    }
  },
  methods: {
    ...mapActions(['setWarningModal']),
    ...mapActions('poi', { deleteSelectedPoi: 'delete' }),
    closeModal () {
      this.setWarningModal(false)
    },
    deletePoi () {
      this.deleteSelectedPoi(this.selectedPoi)
    }
  }
}
</script>
