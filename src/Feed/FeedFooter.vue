<script setup>
import { inject } from 'vue'
import CommentCount from '../components/view/CommentCount.vue'
import LikeCount from '../components/view/LikeCount.vue'
import ViewCount from '../components/view/ViewCount.vue'
import { useBudgetStore } from '@/stores/budgetStore'

const budgetStore = inject('budgetStore')
const product = inject('product')

const { purchaseProduct } = useBudgetStore()

const add = () => {
  purchaseProduct(product.id)
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="product.meta.comment" />
    <LikeCount :like="product.meta.like" />
    <ViewCount :view="product.meta.view" />
    <button class="bg-black text-white p-2" @click="add">Купить</button>
  </div>
</template>
