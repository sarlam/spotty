<template>
  <v-layer>
    <v-circle v-for="conf in points"
              :key="conf.key"
              @click="select(conf.key)"
              :config="conf"/>

    <v-circle v-if="isInEdition"
              class="dot"
              @dragend="onDragEnd"
              :config="{
                  x: itemInEdition.pos.x,
                  y: itemInEdition.pos.y,
                  radius: 10,
                  fill: 'blue',
                  draggable: true
                }"/>
  </v-layer>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 's-poi-layer',
  computed: {
    ...mapState('poi', ['itemInEdition']),
    ...mapState('map', ['absolute']),
    ...mapGetters('poi', { points: 'konvaPoints', isInEdition: 'isInEdition' })
  },
  methods: {
    ...mapActions('poi', ['select']),
    onDragEnd (e) {
      this.itemInEdition.pos = {
        x: -this.absolute.x + e.evt.layerX,
        y: -this.absolute.y + e.evt.layerY
      }
    }
  }
}
</script>

<style>
  .dot:hover {
    cursor: grab;
  }
</style>
