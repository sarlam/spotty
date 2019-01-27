<template>
  <v-navigation-drawer v-model="drawerModel"
                       class="no-background"
                       hide-overlay stateless touchless absolute>

    <v-toolbar data-cy="preview-drawer" class="all-events" v-if="drawerModel">
      <h2>{{selectedPoi.name}}</h2>

      <v-btn @click="openWarningModal"
             color="red darken-1"
             data-cy="preview-drawer-delete-btn"
             dark
             right
             bottom
             absolute
             fab>
        <v-icon>delete_forever</v-icon>
      </v-btn>
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
import { mapState, mapGetters, mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions(['setWarningModal']),
    openWarningModal () {
      this.setWarningModal(true)
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
