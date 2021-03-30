import { useState, useCallback } from "react"

export function useMergeState<T extends Record<string, unknown>>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] {
  const [state, setState] = useState<T>(initialState)

  const setMergeState = useCallback((patch) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof patch === "function" ? patch(prevState) : patch),
    }))
  }, [])

  return [state, setMergeState]
}
