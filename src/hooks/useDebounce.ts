/* eslint-disable @typescript-eslint/no-explicit-any */

export function useDebounce<T extends (...args: any[]) => void>(debounced: T, ms = 200) {
  let timer: number | null = null

  const debounce = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => debounced(...args), ms)
  }

  return debounce
}
