<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-8 h-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div>{{ title }}</div>
      <div>{{ subTitle }}</div>
    </div>
  </div>
</template>
