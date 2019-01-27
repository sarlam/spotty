<template>
  <v-navigation-drawer v-model="drawerModel"
                       class="no-background"
                       hide-overlay stateless touchless absolute>

    <v-toolbar data-cy="preview-drawer" class="all-events" v-if="drawerModel">
      <h2>{{selectedPoi.name}}</h2>
    </v-toolbar>

    <!--<v-speed-dial
      v-model="fab"
      right
      bottom
      small
      absolute
      direction="bottom"
      transition="slide-y-transition"
      :open-on-hover="true"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>-->
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

<style lang="scss" scoped>
  .no-background {
    background: transparent;
    pointer-events: none;
    border: none;
  }

  .all-events {
    pointer-events: all;
  }
</style>
