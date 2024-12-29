<script setup>
import api from '@/axios'
import { useRoute } from 'vue-router'
import { ref, onMounted, reactive } from 'vue'
import ContentView from '@/components/detailPage/ContentView.vue'
import TitleView from '@/components/detailPage/TitleView.vue'
import LoaderView from '@/components/LoaderView.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
const route = useRoute()
const data = reactive({
  title: '',
  subTitle: '',
})
const isLoading = ref(false)
const handleAddToReadingList = async (id) => {
  try {
    const response = await api.post(`/reading-list`, { idPost: id })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const fetchData = async (id) => {
  isLoading.value = true
  try {
    const response = await api.get(`/article/${id}`)
    Object.assign(data, { ...response.data })
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  const id = route.params.id
  handleAddToReadingList(id)
  fetchData(id)
})
</script>
<template>
  <div class="lg:max-w-screen-md mx-auto min-h-screen">
    <div v-if="isLoading" class="flex items-center justify-center">
      <LoaderView />
    </div>
    <div v-else>
      <TitleView :title="data.title" :subTitle="data.subTitle" />
      <ContentView :description="data.description" />
    </div>
  </div>
</template>
