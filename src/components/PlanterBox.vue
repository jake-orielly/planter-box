<template>
  <table>
    <tr v-for="row in rows" :key="row">
      <td 
        v-for="col in cols" :key="`${row}-${col}`"
        @click="clickCell(row - 1, col - 1)"  
      >
        <img 
            :src="getPlantImage(plants[(row - 1) * 3 + col - 1])"
        >
      </td>
    </tr>
  </table>
</template>

<script>
import Plant from "../js/Plant.js"

export default {
  name: 'PlanterBox',
  data() {
    return {
      rows: 3,
      cols: 3,
      plants: [],
      gameInterval: undefined
    }
  },
  created() {
    for (let i = 0; i < this.rows; i++)
        for (let j = 0; j < this.cols; j++)
          this.plants.push(new Plant());
    this.gameInterval = setInterval(() => {
      for (let i = 0; i < this.rows; i++) 
        for (let j = 0; j < this.cols; j++)
          this.plants[i * 3 + j].tick();
    }, 100); 
  },
  methods: {
    clickCell(x, y) {
      this.$store.commit("setSelectedCell", this.plants[x * 3 + y]);
    },
    getPlantImage(plant) {
      const stage = Math.min(parseInt(plant.getMaturity() / 100), 3);
      return require(`../assets/plant-stage-${stage}.png`);
    }
  }
}
</script>

<style scoped>
table {
  display: inline-block;
}
</style>
