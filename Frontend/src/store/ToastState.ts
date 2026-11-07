import { create } from "zustand"

type ToastType = "success" | "error"

type ToastData = {
    id: number
    type: ToastType
    message: string
}

type ToastStateType = {
    toast: ToastData | null
    showToast: (type: ToastType, message: string) => void
    hideToast: () => void
}

const ToastState = create<ToastStateType>((set) => ({
    toast: null,
    showToast: (type, message) => set({ toast: { id: Date.now(), type, message } }),
    hideToast: () => set({ toast: null }),
}))

export default ToastState