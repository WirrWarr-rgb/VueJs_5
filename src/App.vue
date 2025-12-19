<script setup>
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './components/HeaderApp.vue'
import BudgetManager from './components/BudgetManager.vue'
import { useBudgetStore } from './stores/budgetStore'

const budgetStore = useBudgetStore()
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />
    <BudgetManager />
    <div class="grid grid-cols-2 gap-6">
      <FeedNode v-for="product in budgetStore.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
