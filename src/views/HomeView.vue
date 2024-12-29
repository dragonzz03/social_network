<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import api from '@/axios'
import SearchBar from '@/components/SearchBar.vue'
import CardItem from '@/components/CardItem.vue'
import TPagination from '@/components/TPagination.vue'
import LoaderView from '@/components/LoaderView.vue'
import DropDown from '@/components/DropDown.vue'
const data = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(6)
const totalPages = ref(0)
const searchTerm = ref('')
const filteredData = ref([])
const isLoading = ref(false)
const isAscending = ref(true)
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredData.value.slice(start, end)
})
const fetchData = async () => {
  isLoading.value = true
  try {
    const response = await api.get('/article')
    data.value = response.data
    filteredData.value = data.value
    totalPages.value = Math.ceil(filteredData.value.length / itemsPerPage.value)
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const handleSearchInput = (query) => {
  searchTerm.value = query
  if (searchTerm.value) {
    filteredData.value = data.value.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.value.toLowerCase()),
    )
  } else {
    filteredData.value = data.value
  }
  totalPages.value = Math.ceil(filteredData.value.length / itemsPerPage.value)
  currentPage.value = 1
}
const handlePageChange = (page) => {
  currentPage.value = page
}
const sortByTitle = () => {
  data.value.sort((a, b) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()
    if (titleA < titleB) {
      return isAscending.value ? -1 : 1
    }
    if (titleA > titleB) {
      return isAscending.value ? 1 : -1
    }
    return 0
  })
  isAscending.value = !isAscending.value
}
onMounted(() => {
  fetchData()
})
watch(searchTerm, (newTerm) => {
  handleSearchInput(newTerm)
})
</script>

<template>
  <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-screen">
    <div class="py-4"><SearchBar @search-input="handleSearchInput" /></div>
    <div class="p-3 flex flex-row items-center justify-between">
      <p>All post</p>
      <DropDown @title="sortByTitle" />
    </div>
    <div v-if="isLoading" class="flex items-center justify-center">
      <LoaderView />
    </div>
    <div v-else-if="paginatedData.length > 0">
      <div class="grid grid-cols-2 gap-4 place-content-stretch h-48">
        <div v-for="item in paginatedData" :key="item.id">
          <CardItem :title="item.title" :subTitle="item.subTitle" :id="item.id" />
        </div>
      </div>
    </div>
    <p v-else>No data available</p>
    <div class="mt-auto">
      <TPagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
