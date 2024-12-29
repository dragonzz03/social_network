<script setup>
import ContentView from '@/components/detailPage/ContentView.vue'
import TitleView from '@/components/detailPage/TitleView.vue'
import api from '@/axios'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch, reactive } from 'vue'
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
const fetchData = async (id) => {
  try {
    const response = await api.get(`/article/${id}`)
    Object.assign(data, { ...response.data })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
onMounted(() => {
  const id = route.params.id
  fetchData(id)
})
</script>
<template>
  <div>
    <TitleView :title="data.title" :subTitle="data.subTitle" />
    <ContentView />
  </div>
</template>
