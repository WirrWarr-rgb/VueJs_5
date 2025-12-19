<script setup>
import { useBudgetStore } from '../stores/budgetStore'

const budgetStore = useBudgetStore()
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
