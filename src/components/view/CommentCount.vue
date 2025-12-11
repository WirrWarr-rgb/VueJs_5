<!-- components/view/CommentCount.vue -->
<script setup>
import { useStoredCounter } from '../../composables/useStoredCounter'

const { count, isActive, handleClick } = useStoredCounter('comments', 0)
</script>

<template>
  <div
    class="flex gap-3 cursor-pointer select-none transition-all hover:scale-110"
    :class="{ 'text-blue-500': isActive }"
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
      class="feather feather-message-square transition-all"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
    {{ count }}
  </div>
</template>
