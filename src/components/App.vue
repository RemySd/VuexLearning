<template>
    <div id="app">
        <WordList/>
        <WordAdd/>
    </div>
</template>

<script>
import WordList from './WordList.vue'
import WordAdd from './WordAdd.vue'

export default {
  components: { WordList, WordAdd }
}
</script>
