<template>
  <v-navigation-drawer v-model="drawerModel"
                       hide-overlay stateless touchless absolute>
    <div data-cy="preview-drawer">{{ selectedPoi }}</div>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 's-preview-drawer',
  computed: {
    ...mapGetters('poi', ['isAPoiSelected']),
    ...mapState('poi', ['selectedPoi']),
    drawerModel: {
      get () {
        return this.isAPoiSelected
      },
      set () {
      }
    }
  }
}

</script>
