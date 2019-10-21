<template>
  <div>
      <h1>Ceci est un test de Vuex</h1>
      <p>{{ wordsList }}</p>
      <p>{{ countWords }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
      wordsList: state => state.words,
      countWords (state) {
        if (state.words) {
          return state.words.words.length
        }

        return 0
      }
    }),
    created () {
      this.$store.dispatch('words/getAllWords')
    }
}
</script>