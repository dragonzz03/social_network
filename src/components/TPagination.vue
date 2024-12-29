<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})
const emit = defineEmits(['page-change'])
const pages = computed(() => {
  let pagesArray = []
  for (let i = 1; i <= props.totalPages; i++) {
    pagesArray.push(i)
  }
  return pagesArray
})
const changePage = (page) => {
  emit('page-change', page)
}
</script>
<template>
  <div class="flex items-center justify-center h-full">
    <ul class="inline-flex -space-x-px text-sm">
      <li>
        <a
          href="#"
          @click.prevent="changePage(currentPage - 1)"
          :class="{ 'pointer-events-none opacity-50': currentPage === 1 }"
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li v-for="page in pages" :key="page">
        <a
          href="#"
          @click.prevent="changePage(page)"
          :class="{
            'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700': page === currentPage,
          }"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >{{ page }}</a
        >
      </li>
      <li>
        <a
          href="#"
          @click.prevent="changePage(currentPage + 1)"
          :class="{ 'pointer-events-none opacity-50': currentPage === totalPages }"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}
.opacity-50 {
  opacity: 0.5;
}
</style>
