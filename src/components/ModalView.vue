<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  text: {
    type: String,
    required: true,
  },
})
defineEmits(['cancel', 'confirm'])
</script>

<template>
  <div class="card-modal">
    <div class="card-content">
      <p class="card-heading">Delete Post</p>
      <p class="card-description">Lorem ipsum dolor sit amet, consectetur adi</p>
    </div>
    <div class="card-button-wrapper">
      <button class="card-button secondary" @click="$emit('cancel')">Cancel</button>
      <button class="card-button primary" @click="$emit('confirm')">Delete</button>
    </div>
    <button class="exit-button" @click="$emit('cancel')">
      <svg height="20px" viewBox="0 0 384 512">
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        ></path>
      </svg>
    </button>
  </div>
</template>
<style scoped>
.card-modal {
  width: 300px;
  height: fit-content;
  background: rgb(240, 235, 235);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  position: relative;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.068);
}
.card-content {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.card-heading {
  font-size: 20px;
  font-weight: 700;
  color: rgb(41, 40, 40);
}
.card-description {
  font-weight: 100;
  color: rgb(102, 102, 102);
}
.card-button-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.card-button {
  width: 50%;
  height: 35px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}
.primary {
  background-color: rgb(255, 114, 109);
  color: white;
}
.primary:hover {
  background-color: rgb(255, 73, 66);
}
.secondary {
  background-color: #ddd;
}
.secondary:hover {
  background-color: rgb(197, 197, 197);
}
.exit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.exit-button:hover svg {
  fill: black;
}
.exit-button svg {
  fill: rgb(175, 175, 175);
}
</style>
