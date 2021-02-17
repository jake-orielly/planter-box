import Vue from 'vue'
import Vuex from 'vuex'

import Plant from "./js/Plant.js"

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        rows: 3,
        cols: 3,
        plants: [],
        selectedCell: undefined,
        gameInterval: undefined
    },
    mutations: {
        initializePlants(state) {
            for (let i = 0; i < state.rows; i++)
                for (let j = 0; j < state.cols; j++)
                    state.plants.push(new Plant());
            state.gameInterval = setInterval(() => {
                for (let i = 0; i < state.rows; i++) 
                    for (let j = 0; j < state.cols; j++)
                        state.plants[i * 3 + j].tick();
            }, 100); 
        },
        setSelectedCell(state, coords) {
            state.selectedCell = [coords[0] * state.rows + coords[1]];
        }
    },
    getters: {
        getImg: (state) => (coords) => {
            const plant = state.plants[coords[0] * state.rows + coords[1]];
            const stage = Math.min(parseInt(plant.getMaturity() / 100), 3);
            return require(`./assets/plant-stage-${stage}.png`);
        },
        getSelectedPlant: (state) => {
            return state.plants[state.selectedCell];
        }
    }
})

export default Store