<script setup>
import { useStoredCounter } from '../../composables/useStoredCounter'

const props = defineProps({
  view: Number,
  productId: Number,
})

// Используем productId для уникального ключа
const { count, isActive, handleClick } = useStoredCounter(
  'view',
  props.view,
  `product_${props.productId}`,
)
</script>

<template>
  <button
    class="flex gap-3 cursor-pointer select-none transition-all hover:scale-110"
    :class="{ 'text-green-500': isActive }"
    @click="handleClick"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-eye transition-all"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
    {{ count }}
  </button>
</template>
