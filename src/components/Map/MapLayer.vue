<template>
  <v-layer>
    <v-image data-cy="canvas-stage-map-image" :config="config"></v-image>
  </v-layer>
</template>

<script>
import { mapActions } from 'vuex'
import mapPath from '@/assets/maps/amsterdam.jpg'

export default {
  name: 's-map-layer',
  data: () => ({
    config: {
      image: null
    }
  }),
  created () {
    const image = new Image()
    // TODO possible to load another map ?
    image.src = mapPath

    image.onload = () => {
      this.afterImageLoad({ width: image.naturalWidth, height: image.naturalHeight })
      this.config.image = image
    }
  },
  methods: {
    ...mapActions('map', ['afterImageLoad'])
  }
}
</script>
