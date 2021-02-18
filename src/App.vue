<template>
  <div id="app">
    <InventoryInfo />
    <PlanterBox />
    <SelectedInfo />
  </div>
</template>

<script>
import InventoryInfo from './components/InventoryInfo.vue'
import PlanterBox from './components/PlanterBox.vue'
import SelectedInfo from './components/SelectedInfo.vue'

export default {
  name: 'App',
  components: {
    InventoryInfo,
    PlanterBox,
    SelectedInfo
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 15% 15% 15%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
