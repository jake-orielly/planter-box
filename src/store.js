import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        selectedCell: undefined
    },
    mutations: {
        setSelectedCell(state, val) {
            state.selectedCell = val;
        }
    }
})

export default Store