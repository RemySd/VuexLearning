<template>
  <div>
      <input id="wordAdd" type="text" v-model="newWord">
      <button @click="addNewWord">Ajouter</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            newWord: null
        }
    },
    methods: {
        ...mapActions('words', [
            'addWordToList'
        ]),
        addNewWord() {
            this.addWordToList(this.newWord)
            this.newWord = null        
        }
    }
}

</script>