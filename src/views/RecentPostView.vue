<script setup>
import { ref, onMounted } from 'vue'
import api from '@/axios'
import { useRouter } from 'vue-router'
import ModalView from '@/components/ModalView.vue'
import LoaderView from '@/components/LoaderView.vue'
const router = useRouter()
const data = ref([])
const showModal = ref(false)
const selectedId = ref(null)
const isLoading = ref(false)
const fetchData = async () => {
  isLoading.value = true
  try {
    const response = await api.get('/article')
    data.value = response.data
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const handleEdit = (id) => {
  router.push(`/updatePost/${id}`)
}
const handleShowModal = (id) => {
  selectedId.value = id
  showModal.value = true
}
const handleDelete = async () => {
  if (selectedId.value !== null) {
    try {
      await api.delete(`/article/${selectedId.value}`)
      data.value = data.value.filter((item) => item.id !== selectedId.value)
      showModal.value = false
      selectedId.value = null
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-screen">
    <div v-if="isLoading" class="flex items-center justify-center">
      <LoaderView />
    </div>
    <div v-else class="card">
      <div class="card__title">Data Table</div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.name }}</td>
            <td>
              <button class="edit" @click="handleEdit(item.id)">Edit</button>
              <button class="delete" @click="handleShowModal(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div
        class="rounded-lg shadow-lg transform transition-all duration-500 ease-in-out"
        :class="{ '-translate-y-full': !showModal, 'translate-y-0': showModal }"
      >
        <ModalView @confirm="handleDelete" @cancel="showModal = false" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  background: rgb(73, 71, 71);
  color: white;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0;
  padding: 20px;
}

.card__title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #333;
  color: white;
}

.table td button {
  padding: 4px 8px;
  margin: 0 2px;
  border: none;
  cursor: pointer;
}

.table td button.edit {
  background-color: #4caf50; /* Green */
  color: white;
}

.table td button.delete {
  background-color: #f44336; /* Red */
  color: white;
}
</style>
