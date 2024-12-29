<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import InputBase from '@/components/InputBase.vue'
import SubmitBase from '@/components/SubmitBase.vue'
import LoaderView from '@/components/LoaderView.vue'
import api from '../axios'

const btnText = ref('Update')
const isLoading = ref(false)

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

const route = useRoute()

const fetchArticleById = async (id) => {
  isLoading.value = true
  try {
    const response = await api.get(`/article/${id}`)
    const article = response.data
    formData.name = article.name
    formData.email = article.email
    formData.title = article.title
    formData.subTitle = article.subTitle
    formData.description = article.description
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching article by id:', error)
  }
}

const handleSubmit = async () => {
  const id = route.params.id
  try {
    await api.put(`/article/${id}`, formData)
  } catch (error) {
    console.error('Error submitting data:', error)
    alert('An error occurred while submitting the data.')
  }
}

onMounted(() => {
  const id = route.params.id
  if (id) {
    fetchArticleById(id)
  }
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-screen">
      <div v-if="isLoading" class="flex items-center justify-center">
        <LoaderView />
      </div>

      <div v-else class="grid grid-cols-3 gap-4">
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
