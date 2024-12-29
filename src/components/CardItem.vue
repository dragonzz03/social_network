<script setup>
defineProps({
  title: { type: String, required: true },
  subTitle: { type: String, default: '' },
  id: { type: String, required: true, default: '' },
})
</script>
<template>
  <div
    class="w-full bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
  >
    <div class="col-span-2 text-lg font-bold capitalize rounded-md">
      {{ title }}
    </div>
    <div class="col-span-2 rounded-md">
      {{ subTitle }}
    </div>
    <div class="col-span-1">
      <a :href="`/detail/${id}`">See detail</a>
    </div>
  </div>
</template>
