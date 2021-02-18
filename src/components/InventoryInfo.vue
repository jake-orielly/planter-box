<template>
  <div>
    <table>
      <tr 
        v-for="(amount, item) in $store.state.inventory"
        :key="item"
      >
        <td>
          {{item}}:
        </td>
        <td>
          {{amount}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InventoryInfo',
}
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
