import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadingListView from '../views/ReadingListView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import RecentPostView from '@/views/RecentPostView.vue'
import UpdatePostView from '@/views/UpdatePostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reading-list',
      name: 'readingList',
      component: ReadingListView,
    },
    {
      path: '/detail/:id',
      name: 'detailPost',
      component: DetailView,
    },
    {
      path: '/create/',
      name: 'createPost',
      component: CreateView,
    },
    {
      path: '/recentPost/',
      name: 'recentPost',
      component: RecentPostView,
    },
    {
      path: '/updatePost/:id',
      name: 'updatePost',
      component: UpdatePostView,
    },
  ],
})

export default router
