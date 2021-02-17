<template>
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
</template>

<script>
export default {
  name: 'SelectedInfo',
  computed: {
    plantInfo() {
      let plant = this.$store.state.selectedCell
      return (plant ? plant.getOverview() : undefined);
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
table { 
  display: inline-block;
}
</style>
