<template>
  <div id="app">
    <PlanterBox />
    <SelectedInfo />
  </div>
</template>

<script>
import PlanterBox from './components/PlanterBox.vue'
import SelectedInfo from './components/SelectedInfo.vue'

export default {
  name: 'App',
  components: {
    PlanterBox,
    SelectedInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
