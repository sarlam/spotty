<template>
  <v-navigation-drawer data-cy="edition-drawer"
                       v-model="drawerModel"
                       hide-overlay stateless touchless right absolute>
    <v-toolbar flat>
      <h3 class="title"> Edition </h3>
      <v-spacer></v-spacer>
      <v-btn data-cy="edition-drawer-close-btn"
             icon flat
             @click="clearEdition">
        <v-icon>clear</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container v-if="isInEdition">
      <v-form data-cy="edition-drawer-form" @submit="validateAndStore" ref="editionForm">

        <v-text-field data-cy="edition-drawer-form-name"
                      v-model="itemInEdition.name"
                      :rules="nameRules"
                      label="Name"
                      required></v-text-field>

        <v-btn data-cy="edition-drawer-form-submit"
               color="success"
               type="submit">
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
    ...mapGetters('poi', ['isInEdition']),
    drawerModel: {
      get () {
        return this.isInEdition
      },
      set () {
      }
    }
  },
  methods: {
    ...mapActions('poi', ['add', 'clearEdition', 'update']),
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
