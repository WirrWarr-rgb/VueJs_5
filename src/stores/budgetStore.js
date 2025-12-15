import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const useBudgetStore = defineStore('budget', () => {
  // Используем useStorage для всего состояния
  const purchased = useStorage('budget-purchased', [])
  const products = useStorage('budget-products', [
    {
      id: 1,
      name: 'Test',
      price: 500,
      collection_medias: ['media1', 'media2', 'media3'],
      user: {
        id: 1,
        full_name: 'Alex Alex Alex',
      },
    },
    {
      id: 2,
      name: 'Test 3',
      price: 5000,
      collection_medias: ['media1'],
      user: {
        id: 2,
        full_name: 'Palex Palex Palex',
      },
    },
  ])

  // Добавим бюджетные ограничения
  const budgetLimit = useStorage('budget-limit', 10000)
  const currentMonth = useStorage('budget-month', new Date().toISOString().slice(0, 7))

  // Computed свойства для калькулятора бюджета
  const totalBudget = computed(() =>
    purchased.value.reduce((total, product) => total + product.price, 0),
  )

  const remainingBudget = computed(() => budgetLimit.value - totalBudget.value)

  const isOverBudget = computed(() => remainingBudget.value < 0)

  const productsCount = computed(() => products.value.length)

  // Actions
  const purchaseProduct = (id) => {
    const product = products.value.find((i) => i.id === id)
    if (product && !purchased.value.find((p) => p.id === id)) {
      // Проверяем бюджет перед покупкой
      if (totalBudget.value + product.price <= budgetLimit.value) {
        purchased.value.push({ ...product })
        return true
      }
    }
    return false
  }

  const setBudgetLimit = (limit) => {
    budgetLimit.value = limit
  }

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    }
    products.value.push(newProduct)
    return newProduct.id
  }

  const removeProduct = (id) => {
    products.value = products.value.filter((p) => p.id !== id)
  }

  const clearPurchases = () => {
    purchased.value = []
  }

  return {
    purchased,
    products,
    budgetLimit,
    currentMonth,
    totalBudget,
    remainingBudget,
    isOverBudget,
    productsCount,
    purchaseProduct,
    setBudgetLimit,
    addProduct,
    removeProduct,
    clearPurchases,
  }
})
