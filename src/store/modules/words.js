const state = {
    words: ['Salut', 'Boujour']
}

const mutations = {
    addWord: (state, name) => {
        state.words.push(name.word)
    },
    setWords(state, words) {
        state.words = words
    },
}

const getters = {
    words: (state) => state.words
}

const actions = {
    getAllWords({ commit }) {
        commit('setWords', state.words)
    },
    addWordToList({ commit }, word) {
        commit('addWord', { word: word })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}