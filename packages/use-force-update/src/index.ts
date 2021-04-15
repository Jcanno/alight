import { useReducer } from "react"

export function useForceUpdate() {
  const [count, forceUpdate] = useReducer((count) => count + 1, 0)

  return forceUpdate
}
