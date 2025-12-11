<!-- Feed/FeedType.vue -->
<script setup>
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'

defineProps({
  product: Object,
})
</script>

<template>
  <div class="relative overflow-hidden">
    <FeedHeader
      :name="product.name"
      :count="product.collection_medias.length"
      :user="product.user"
    />
    <FeedFooter :product-id="product.id" />
  </div>
</template>
