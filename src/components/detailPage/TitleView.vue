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
  <div>{{ title }}</div>
  <div>{{ subTitle }}</div>
</template>
