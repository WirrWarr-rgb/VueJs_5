<!-- Feed/FeedFooter.vue -->
<script setup>
import { inject } from 'vue'
import CommentCount from '../components/view/CommentCount.vue'
import LikeCount from '../components/view/LikeCount.vue'
import ViewCount from '../components/view/ViewCount.vue'

const budgetStore = inject('budgetStore')

const props = defineProps({
  productId: Number,
})

const handlePurchase = () => {
  if (props.productId) {
    budgetStore.purchaseProduct(props.productId)
  }
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount />
    <LikeCount />
    <ViewCount />
    <button class="bg-black text-white p-2" @click="handlePurchase">Купить</button>
  </div>
</template>
