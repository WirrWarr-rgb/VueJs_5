<script setup>
defineProps({
  count: Number,
  user: Object,
  name: String,
})
</script>
<template>
  <div class="text-sm">
    <div>Creator - {{ user.full_name }}</div>
    <div>MEdia count: {{ count }}</div>
  </div>
  <h2 class="text-lg font-extrabold">{{ name }}</h2>
</template>
