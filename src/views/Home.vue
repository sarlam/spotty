<template>
  <v-layout :fill-height="true" ref="stage">
    <s-preview-drawer/>
    <s-map/>
    <s-edition-drawer/>
  </v-layout>
</template>

<script>
import { debounce } from 'lodash'
import { mapActions } from 'vuex'
import SMap from '../components/Map'
import SEditionDrawer from '../components/EditionDrawer'
import SPreviewDrawer from '../components/PreviewDrawer'

export default {
  components: { SPreviewDrawer, SEditionDrawer, SMap },
  mounted () {
    this.onResize() // pretend to resize to set up the size of the canvas
    // TODO take care to load only one Map to reduce the number of resize watcher
    window.addEventListener('resize', debounce(this.onResize, 300))
  },
  methods: {
    ...mapActions(['setStageSize']),

    /**
       * store the new stage width and height
       */
    onResize () {
      this.setStageSize({
        height: this.$refs.stage.clientHeight,
        width: this.$refs.stage.clientWidth
      })
    }
  }
}
</script>
