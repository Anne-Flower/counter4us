<script setup lang="ts">
import PointsCounter from './components/pointsCounter.vue'
</script>

<template>
  <div class="flex h-screen">
    <PointsCounter color="green" class="p-4" />
    <PointsCounter color="red" class="p-4" />
  </div>
</template>

<style scoped></style>
