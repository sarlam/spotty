<template>
  <v-navigation-drawer absolute v-model="isAPoiSelected">
    {{ selectedPoi }}
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 's-preview-drawer',
  computed: {
    ...mapGetters('poi', ['isAPoiSelected']),
    ...mapState('poi', ['selectedPoi'])
  }
}

</script>
