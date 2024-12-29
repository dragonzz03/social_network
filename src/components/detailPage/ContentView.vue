<script setup>
defineProps({
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-8 h-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div>{{ description }}</div>
    </div>
  </div>
</template>
