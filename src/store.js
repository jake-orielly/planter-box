import Vue from 'vue'
import Vuex from 'vuex'

import Plant from "./js/Plant.js"

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        rows: 3,
        cols: 3,
        plants: [],
        inventory: {
            cloth: 0
        },
        selectedCell: undefined,
        gameInterval: undefined
    },
    mutations: {
        initializePlants(state) {
            let plant;
            for (let i = 0; i < state.rows; i++)
                for (let j = 0; j < state.cols; j++)
                    state.plants.push(new Plant());
            state.gameInterval = setInterval(() => {
                for (let i = 0; i < state.rows; i++) 
                    for (let j = 0; j < state.cols; j++) {
                        plant = state.plants[i * 3 + j];
                        if (plant)
                            plant.tick();
                    }
            }, 500); 
        },
        setSelectedCell(state, coords) {
            state.selectedCell = [coords[0] * state.rows + coords[1]];
        },
        addItem(state, data) {
            state.inventory[data.item] += data.amount;
        },
        harvestPlant(state) {
            this.commit("addItem", {
                item:"cloth",
                amount: state.plants[state.selectedCell].harvestYield()
            });
            state.plants[state.selectedCell] = undefined;
            state.selectedCell = undefined;
        }
    },
    getters: {
        getImg: (state) => (coords) => {
            const plant = state.plants[coords[0] * state.rows + coords[1]];
            if (plant) {
                const stage = plant.getMaturity();
                return require(`./assets/plant-stage-${stage}.png`);
            }
            return undefined;
        },
        getSelectedPlant: (state) => {
            return state.plants[state.selectedCell];
        }
    }
})

export default Store