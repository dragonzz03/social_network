<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, default: 'text' },
  label: { type: String, required: true },
  propErrorMessage: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
})

defineEmits(['update:modelValue'])

const bindProps = computed(() => ({
  id: props.id,
  name: props.name,
  type: props.type,
  value: props.modelValue,
}))
</script>

<template>
  <div class="mb-4">
    <label :for="bindProps.id" class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <component
      :is="bindProps.type === 'textarea' ? 'textarea' : 'input'"
      v-bind="bindProps"
      :rows="bindProps.type === 'textarea' ? 5 : undefined"
      @input="$emit('update:modelValue', $event.target.value)"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <p v-if="propErrorMessage" class="text-red-500 text-xs italic">{{ propErrorMessage }}</p>
  </div>
</template>
