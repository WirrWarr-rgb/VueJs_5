<script setup>
import { provide } from 'vue'
import { useBudgetStore } from './stores/budgetStore'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './components/HeaderApp.vue'
import BudgetManager from './components/BudgetManager.vue'

const budgetStore = useBudgetStore()

// Provide глобальных данных
provide('budgetStore', budgetStore)
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
