<script setup>
import { reactive, ref } from 'vue'
import InputBase from '@/components/InputBase.vue'
import SubmitBase from '@/components/SubmitBase.vue'

import api from '../axios'
const btnText = ref('Post')
const formData = reactive({
  name: '',
  email: '',
  title: '',
  subTitle: '',
  description: '',
})
const inputAttrs = [
  { id: 'name', name: 'name', type: 'text', label: 'Name', modelValue: formData.name },
  { id: 'email', name: 'email', type: 'email', label: 'Email', modelValue: formData.email },
  { id: 'title', name: 'title', type: 'text', label: 'Title', modelValue: formData.title },
  {
    id: 'subTitle',
    name: 'subTitle',
    type: 'text',
    label: 'Sub Title',
    modelValue: formData.subTitle,
  },
  {
    id: 'description',
    name: 'description',
    type: 'textarea',
    label: 'Description',
    modelValue: formData.description,
  },
]
const handleSubmit = async () => {
  console.log(formData)
  const formDataToSubmit = new FormData()
  for (const key in formData) {
    formDataToSubmit.append(key, formData[key])
  }
  try {
    await api.post('/article', formDataToSubmit)
    for (const key in formData) {
      formData[key] = ''
    }
  } catch (error) {
    console.error('Error submitting data:', error)
    alert('An error occurred while submitting the data.')
  }
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div class="lg:max-w-screen-md mx-auto flex flex-col">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <div v-for="(input, index) in inputAttrs" :key="index">
            <InputBase
              :id="input.id"
              :name="input.name"
              :type="input.type"
              :label="input.label"
              v-model="formData[input.name]"
            />
          </div>
          <SubmitBase :text="btnText" />
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
