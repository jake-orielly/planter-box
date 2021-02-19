<template>
  <table>
    <tr v-for="row in $store.state.rows" :key="row">
      <td 
        v-for="col in $store.state.cols" :key="`${row}-${col}`"
        :class="{'selected' : isSelected(row - 1, col - 1)}"
        @click="clickCell(row - 1, col - 1)"  
      >
        <img 
            :src="getPlantImage(row - 1, col - 1)"
        >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PlanterBox',
  created() {
    this.$store.commit("initializePlants");
  },
  methods: {
    clickCell(x, y) {
      this.$store.commit("setSelectedCell", [x, y]);
    },
    isSelected(x, y) {
      return this.$store.state.selectedCell == x * 3 + y;
    },
    getPlantImage(x, y) {
      return this.$store.getters.getImg([x, y]);
    }
  }
}
</script>

<style scoped>
table {
  display: inline-block;
}

td {
  border: 2px solid black;
  border-radius: 0.25rem;
  width: 2rem;
  height: 2rem;
}

.selected {
  border: 2px solid gold;
}
</style>
