<template>
  <v-layer>
    <v-image @click="onClick" :config="config"></v-image>
  </v-layer>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import mapPath from '@/assets/maps/amsterdam.jpg'

export default {
  name: 's-map-layer',
  data: () => ({
    config: {
      image: null
    }
  }),
  computed: {
    ...mapState('map', ['absolute']),
    ...mapState('poi', ['itemInEdition']),
    ...mapGetters('poi', ['isAPoiSelected', 'isInEdition'])
  },
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
    ...mapActions('map', ['afterImageLoad']),
    ...mapActions('poi', ['create', 'deselect']),
    onClick (e) {
      if (this.isAPoiSelected) {
        this.deselect()
      } else if (this.isInEdition) {
        this.itemInEdition.pos = {
          x: -this.absolute.x + e.evt.layerX,
          y: -this.absolute.y + e.evt.layerY
        }
      } else {
        this.create({
          x: -this.absolute.x + e.evt.layerX,
          y: -this.absolute.y + e.evt.layerY
        })
      }
    }
  }
}
</script>
