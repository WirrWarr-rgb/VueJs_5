<script setup>
import { inject, computed } from 'vue'
import CommentCount from '../components/view/CommentCount.vue'
import LikeCount from '../components/view/LikeCount.vue'
import ViewCount from '../components/view/ViewCount.vue'
import { useBudgetStore } from '../stores/budgetStore'

const budgetStore = useBudgetStore()

const product = inject('product')

const productMeta = computed(
  () => product?.value?.meta || product?.meta || { comment: 0, like: 0, view: 0 },
)

const productId = computed(() => product?.value?.id || product?.id)

const add = () => {
  if (productId.value) {
    const purchased = budgetStore.purchaseProduct(productId.value)
    if (purchased) {
      console.log('Продукт куплен:', productId.value)
    } else {
      console.log('Не удалось купить продукт:', productId.value)
    }
  }
}
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount :comment="productMeta.comment" :product-id="productId" />
    <LikeCount :like="productMeta.like" :product-id="productId" />
    <ViewCount :view="productMeta.view" :product-id="productId" />
    <button class="bg-black text-white p-2 hover:bg-gray-800 transition-colors" @click="add">
      Купить
    </button>
  </div>
</template>
