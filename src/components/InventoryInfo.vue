<template>
  <div>
    <table>
      <tr 
        v-for="(amount, item) in $store.state.inventory"
        :key="item"
      >
        <td>
          {{titleCase(item)}}:
        </td>
        <td>
          {{amount}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import utilities from "../js/utilities.js";

export default {
  name: 'InventoryInfo',
  methods: {
    titleCase(text) {
      console.log(utilities.titleCase("hi there"))
      return utilities.titleCase(text);
    }
  }
}
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
