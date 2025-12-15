import { useStorage } from '@vueuse/core'

export function useStoredCounter(key, initialValue = 0, uniqueId = '') {
  const storageKey = uniqueId ? `${key}_${uniqueId}` : key
  const storageActiveKey = uniqueId ? `${key}_active_${uniqueId}` : `${key}_active`

  const count = useStorage(storageKey, initialValue)
  const isActive = useStorage(storageActiveKey, false)

  const handleClick = () => {
    if (isActive.value) {
      count.value--
      isActive.value = false
    } else {
      count.value++
      isActive.value = true
    }
  }

  const reset = () => {
    count.value = initialValue
    isActive.value = false
  }

  return {
    count,
    isActive,
    handleClick,
    reset,
  }
}
