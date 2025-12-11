<!-- components/HeaderApp.vue -->
<script setup>
import { inject } from 'vue'

const budgetStore = inject('budgetStore')
</script>

<template>
  <div class="p-3 text-2xl mb-4">
    <div class="flex justify-between items-center">
      <div>
        Общая сумма покупок: {{ budgetStore.totalBudget }} ₽ (куплено:
        {{ budgetStore.purchased.length }} товаров)
      </div>
      <div v-if="budgetStore.isOverBudget" class="text-red-500 font-bold">ПРЕВЫШЕН БЮДЖЕТ!</div>
    </div>
  </div>
</template>
