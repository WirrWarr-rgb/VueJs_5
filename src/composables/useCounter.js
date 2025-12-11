// composables/useCounter.js
import { ref } from 'vue' // 移除未使用的 computed

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const isActive = ref(false)

  const handleClick = () => {
    if (isActive.value) {
      count.value--
      isActive.value = false
    } else {
      count.value++
      isActive.value = true
    }
  }

  return {
    count,
    isActive,
    handleClick,
  }
}
