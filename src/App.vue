<script setup lang="ts">
import { ref } from 'vue'
import PointsCounter from './components/pointsCounter.vue'
import DrawerSlide from './components/drawerSlide.vue'

const defaultValue = 50

const count1 = ref(defaultValue)
const count2 = ref(defaultValue)

function reset() {
  count1.value = defaultValue
  count2.value = defaultValue
}
</script>

<template>
  <section class="flex flex-col h-screen">
    <nav class="p-4 flex justify-between w-screen">
      <button
        @click="reset"
        class="p-2 mr-42 rounded touch-manipulation bg-pink-900 text-pink-50 text-xl "
      >
        RESET
      </button>
      <DrawerSlide/>
    </nav>
    <div class="flex h-full">
      <PointsCounter color="green" class="p-4" v-model:count="count1" />
      <PointsCounter color="red" class="p-4" v-model:count="count2" />
    </div>
  </section>
</template>

<style scoped></style>
