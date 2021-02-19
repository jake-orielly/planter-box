<template>
  <div>
    <p class="title">
      Empty Cell
    </p>
    <button
      @click="plantSeed"
    >
      Plant Seed
    </button>
  </div>
</template>

<script>
export default {
  name: 'EmptyTileMenu',
  methods: {
    plantSeed() {
      this.$store.commit("plantSeed");
    }
  }
}
</script>

<style scoped>
</style>
