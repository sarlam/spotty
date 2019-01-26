<template>
  <v-navigation-drawer right absolute v-model="isInEdition">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Edition
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-container v-if="isInEdition">
      <v-form @submit="validateAndStore" ref="editionForm">

        <v-text-field
          v-model="itemInEdition.name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-btn
          color="success"
          type="submit"
        >
          Validate
        </v-btn>
      </v-form>
    </v-container>

  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 's-edition-drawer',
  data () {
    return {
      nameRules: [
        v => !!v || 'Name is required'
      ]
    }
  },
  computed: {
    ...mapState('poi', ['itemInEdition']),
    ...mapGetters('poi', ['isInEdition'])
  },
  methods: {
    ...mapActions('poi', ['add']),
    validateAndStore (e) {
      e.preventDefault()
      if (this.$refs.editionForm.validate()) {
        if (this.itemInEdition.isCreation) {
          this.add(this.itemInEdition) // TODO : should test return
        }
      }
    }
  }
}

</script>
