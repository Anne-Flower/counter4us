<script setup lang="ts">
import { ref } from 'vue'
const count = defineModel<number>("count",{ required: true })
const playerName = ref('Anonymous')

type Color = "purple"| "red" | "yellow" | "green"

const colorClasses :Record<Color, string> ={
  purple : "bg-purple-200",
  red: "bg-red-200",
  yellow: "bg-yellow-200",
  green: "bg-green-200"
}

interface Props {
  color: Color
}
const props = defineProps<Props>()


function increaseCount() {
  count.value++
}

function decreaseCount() {
  count.value--
}

</script>

<template>
  <div class="flex flex-col flex-1 justify-between h-full items-center  ">
    <input v-model="playerName" class="w-full p-2 text-xl text-center focus:bg-purple-100 bg-yellow-100 border-yellow-500" />
    <div :class="colorClasses[props.color]" class="rounded h-28 w-28 flex justify-center items-center text-3xl ">{{ count }}</div>
    <div class="flex flex-col gap-2 w-full text-3xl ">
      <button @click="increaseCount" class="p-4 rounded touch-manipulation" :class="colorClasses[props.color]">+</button>
      <button @click="decreaseCount" class="p-4 rounded touch-manipulation" :class="colorClasses[props.color]">-</button>
    </div>
  </div>
</template>

<style scoped></style>
