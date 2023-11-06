<template>
  <div class="relative w-max">
    show <button @click="displayList = !displayList">entries {{ list[currentIndex] }}</button>
    <div
      v-if="displayList"
      class="absolute top-6 right-0 z-10 flex flex-col bg-white w-full py-2 text-blue-400 rounded-md shadow-md"
    >
      <button
        @click="buttonClicked(index)"
        class="px-2 py-1 hover:bg-gray-100"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits<{
  (e: 'onPageIndexChanged', currentIndex: number): void
}>()

let list = ref<number[]>([])
let displayList = ref<boolean>(false)
let currentIndex = ref<number>(0)

function buttonClicked(index: number) {
  currentIndex.value = index
  emit('onPageIndexChanged', list.value[currentIndex.value])
}

function init() {
  list.value = [5, 10, 15, 20]
}

onMounted(init)
</script>
