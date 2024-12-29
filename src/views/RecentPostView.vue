<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const data = ref([])

const fetchData = async () => {
  try {
    const response = await axios.get('/article')
    data.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const handleEdit = (id) => {
  router.push(`/updatePost/${id}`)
}

const handleDelete = async (id) => {
  try {
    await axios.delete(`/article/${id}`)
    data.value = data.value.filter((item) => item.id !== id)
    console.log(`Deleted item with id: ${id}`)
  } catch (error) {
    console.error('Error deleting data:', error)
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="lg:max-w-screen-md mx-auto flex flex-col min-h-screen">
    <div class="card">
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
              <button class="edit" @click="handleEdit(item.id)">Sửa</button>
              <button class="delete" @click="handleDelete(item.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
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
