<template>
  <div class="text-xs-center">
    <v-dialog v-model="aboutModal"
              width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2"
                      primary-title>
          About Spotty
        </v-card-title>

        <v-card-text data-cy="about-modal" class="text-sm-center">
          <p>
            Version : {{info.version}}
          </p>
          <p>
            2019 - {{info.author.name}} - license {{info.license}}
          </p>

          <h3>Licensed included libraries</h3>

          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">roboto-fontface</div>
              <v-card>
                <v-card-text class="text-sm-center">
                  Under <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <div slot="header">material-design-icons-iconfont</div>
              <v-card>
                <v-card-text class="text-sm-center">
                Under <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn data-cy="about-btn-close"
                 color="primary"
                 flat
                 @click="closeModal">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import info from '../../package'

export default {
  name: 's-about-modal',
  data () {
    return {
      info
    }
  },
  computed: {
    ...mapState(['aboutModal'])
  },
  methods: {
    ...mapActions(['setAboutModal']),
    closeModal () {
      this.setAboutModal(false)
    }
  }
}
</script>
