<template>
    <v-stage ref="stage"
             data-cy="canvas-stage"
             :class="{dragging: map.isDragging}"
             @dragstart="onDragStart"
             @dragend="onDragEnd"
             v-if="config.width !== 0 && config.height !== 0"
             :config="config">
      <s-map-layer></s-map-layer>
      <s-poi-layer></s-poi-layer>
    </v-stage>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SMapLayer from './Map/MapLayer'
import SPoiLayer from './Map/POILayer'

export default {
  name: 's-map',
  components: {
    SPoiLayer,
    SMapLayer
  },
  data () {
    return {
      config: {
        width: 0,
        height: 0,
        draggable: true,
        dragBoundFunc: this.dragBoundFunc
      }
    }
  },
  computed: {
    ...mapState(['stage', 'map'])
  },
  watch: {
    'stage.width' (width) {
      this.config.width = width
    },
    'stage.height' (height) {
      this.config.height = height
    }
  },
  methods: {
    ...mapActions('map', ['setDragging', 'setAbsolute']),

    /**
       * Control the dragging next position so that it never goes beyond the image map.
       *
       * @param {{x:Number, y:Number}} pos - current dragging position
       * @return {{x: number, y: number}}
       */
    dragBoundFunc (pos) {
      const { x: initialX, y: initialY } = pos

      const maxX = this.stage.width - this.map.size.width
      const maxY = this.stage.height - this.map.size.height

      // if positive -> stuck to 0
      // if less than maxX (which is negative) -> stuck to maxX
      // else then drag :)
      const x = initialX < 0
        ? initialX > maxX
          ? initialX
          : maxX
        : 0

      // same here
      const y = initialY < 0
        ? initialY > maxY
          ? initialY
          : maxY
        : 0

      return { x, y }
    },
    onDragStart () {
      this.setDragging(true)
    },
    onDragEnd (e) {
      this.setDragging(false)
      this.setAbsolute(e.target.getAbsolutePosition())
    }
  }
}
</script>

<style lang="scss" scoped>
  .dragging {
    cursor: grabbing;
  }
</style>
