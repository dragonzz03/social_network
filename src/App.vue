<script setup>
import HeaderView from './layouts/HeaderView.vue'
import FooterView from './layouts/FooterView.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header><HeaderView /></header>
  <div class="bg-slate-100 py-4 min-h-screen">
    <RouterView />
  </div>
  <footer><FooterView /></footer>
</template>
