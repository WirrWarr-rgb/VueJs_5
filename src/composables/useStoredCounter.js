// composables/useStoredCounter.js
import { useStorage } from '@vueuse/core'

export function useStoredCounter(key, initialValue = 0) {
  const count = useStorage(key, initialValue)
  const isActive = useStorage(`${key}_active`, false)

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
