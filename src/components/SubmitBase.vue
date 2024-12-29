<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="flex items-center justify-between">
    <button
      type="submit"
      class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {{ text }}
    </button>
  </div>
</template>
<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>
