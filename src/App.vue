<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Spotty</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content ref="main">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
