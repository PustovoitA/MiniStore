import { useRef, useCallback } from "react"

export const useDebounce = (fn: (...args: any[]) => void, delay: number) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    return useCallback((...args: any[]) => {
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }, [fn, delay])
}