<template>
  <div>
    <table>
      <tr v-for="(val, key) in plantInfo" :key="key">
        <td>
          {{key}}
        </td>
        <td>
          {{val}}
        </td>
      </tr>
    </table>
    <div
      id="harvest-button-container"
    >
      <button
        v-if="plantInfo"
        @click="harvestClick"
      > 
        Harvest
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedInfo',
  computed: {
    plantInfo() {
      let plant = this.$store.getters.getSelectedPlant;
      return (plant ? plant.getOverview() : undefined);
    }
  },
  data() {
    return {
      harvestClick() {
        
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-left: 3rem;
}

div, table { 
  display: inline-block;
}

#harvest-button-container, button {
  display: block;
}
</style>
