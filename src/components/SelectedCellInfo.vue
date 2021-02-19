<template>
  <div>
    <SelectedPlantInfo v-if="$store.getters.getSelectedPlant" />
    <EmptyTileMenu v-else-if="$store.state.selectedCell" />
  </div>
</template>

<script>
import EmptyTileMenu from "./EmptyTileMenu.vue";
import SelectedPlantInfo from "./SelectedPlantInfo.vue";

export default {
  name: 'SelectedCellInfo',
  components: {
    EmptyTileMenu,
    SelectedPlantInfo
  }
}
</script>

<style scoped>
div {
  margin-left: 3rem;
}
</style>
