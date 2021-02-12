<template>
  <table>
    <tr v-for="row in rows" :key="row">
      <td v-for="col in cols" :key="`${row}-${col}`">
        Plant Goes Here
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PlanterBox',
  data() {
    return {
      rows: 3,
      cols: 3
    }
  }
}
</script>

<style scoped>

</style>
