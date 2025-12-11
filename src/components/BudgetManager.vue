<!-- components/BudgetManager.vue -->
<script setup>
import { inject } from 'vue'

const budgetStore = inject('budgetStore')
</script>

<template>
  <div class="p-4 bg-gray-100 rounded-lg mb-6">
    <h3 class="text-lg font-bold mb-4">Калькулятор бюджета</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div class="p-3 bg-white rounded">
        <p class="text-sm text-gray-600">Лимит бюджета</p>
        <input
          v-model.number="budgetStore.budgetLimit"
          type="number"
          class="w-full p-2 border rounded"
        />
      </div>

      <div class="p-3 bg-white rounded">
        <p class="text-sm text-gray-600">Потрачено</p>
        <p class="text-xl font-bold" :class="{ 'text-red-500': budgetStore.isOverBudget }">
          {{ budgetStore.totalBudget }} ₽
        </p>
      </div>

      <div class="p-3 bg-white rounded">
        <p class="text-sm text-gray-600">Осталось</p>
        <p class="text-xl font-bold" :class="{ 'text-red-500': budgetStore.isOverBudget }">
          {{ budgetStore.remainingBudget }} ₽
        </p>
      </div>
    </div>

    <div v-if="budgetStore.isOverBudget" class="p-3 bg-red-100 text-red-700 rounded">
      ⚠️ Превышен лимит бюджета!
    </div>

    <button
      @click="budgetStore.clearPurchases"
      class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Очистить покупки
    </button>
  </div>
</template>
