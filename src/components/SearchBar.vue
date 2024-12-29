<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
const emit = defineEmits(['search-input'])
const searchTerm = ref('')
const handleSearchInput = (event) => {
  searchTerm.value = event.target.value
  debouncedEmitSearchInput(searchTerm.value)
}
const debouncedEmitSearchInput = debounce((query) => {
  emit('search-input', query)
}, 300)
</script>
<template>
  <form class="form">
    <input
      class="input"
      placeholder="Type your text"
      required
      type="text"
      v-model="searchTerm"
      @input="handleSearchInput"
    />
    <button class="reset" type="reset">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </form>
</template>
<style scoped>
.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
.form {
  --timing: 0.3s;
  --width-of-input: 100%;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);
}
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
.form:before {
  content: '';
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
.form:focus-within:before {
  transform: scale(1);
}
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
.form svg {
  width: 17px;
  margin-top: 3px;
}
</style>
