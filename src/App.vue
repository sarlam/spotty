<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Spotty</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn data-cy="about-btn-open"
               :icon="true"
               @click="openAboutModal"
               flat
               round>
          <v-icon>info</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content ref="main">
      <router-view/>
    </v-content>
    <s-about-modal></s-about-modal>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SAboutModal from './components/About'

export default {
  name: 'App',
  components: { SAboutModal },
  methods: {
    ...mapActions(['setAboutModal']),
    openAboutModal () {
      this.setAboutModal(true)
    }
  }
}
</script>
