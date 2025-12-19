<script setup>
import { useStoredCounter } from '../../composables/useStoredCounter'

const props = defineProps({
  like: Number,
  productId: Number,
})

// Используем productId для уникального ключа
const { count, isActive, handleClick } = useStoredCounter(
  'like',
  props.like,
  `product_${props.productId}`,
)
</script>

<template>
  <button
    class="flex gap-3 cursor-pointer select-none transition-all hover:scale-110"
    :class="{ 'text-red-500': isActive }"
    @click="handleClick"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      :fill="isActive ? 'currentColor' : 'none'"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-heart transition-all"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      ></path>
    </svg>
    {{ count }}
  </button>
</template>
