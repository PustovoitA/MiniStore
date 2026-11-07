import { useState } from "react"
import ToastState from "@/store/ToastState"

const DURATION = 5000 // сколько миллисекунд живёт уведомление

type ToastItemProps = {
    type: "success" | "error"
    message: string
    onClose: () => void
}

const ToastItem = ({ type, message, onClose }: ToastItemProps) => {
    const [closing, setClosing] = useState(false)
    const isSuccess = type === "success"

    return (
        <div
            role={isSuccess ? "status" : "alert"}
            className={`fixed top-5 right-5 z-[10000] w-[calc(100%-40px)] max-w-90 overflow-hidden border border-(--border) bg-(--white-color) shadow-lg ${closing ? "toast-out" : "toast-in"}`}
            onAnimationEnd={(e) => {
                if (e.animationName === "toast-out") onClose()
            }}
        >
            <div className="flex items-start gap-3 p-4">
                <span className={`material-symbols-outlined ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                    {isSuccess ? "check_circle" : "error"}
                </span>
                <p className="flex-1 text-[16px] text-(--black-text-color)">{message}</p>
                <button
                    type="button"
                    aria-label="Close"
                    className="cursor-pointer text-(--grey-text-color) transition-colors hover:text-(--black-text-color)"
                    onClick={() => setClosing(true)}
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <div className="h-1 w-full bg-(--grey-light-color)">
                <div
                    className={`toast-progress h-full ${isSuccess ? "bg-green-600" : "bg-red-600"}`}
                    style={{ animationDuration: `${DURATION}ms` }}
                    onAnimationEnd={() => setClosing(true)}
                />
            </div>
        </div>
    )
}

const Toast = () => {
    const toast = ToastState((state) => state.toast)
    const hideToast = ToastState((state) => state.hideToast)

    if (!toast) return null

    return <ToastItem key={toast.id} type={toast.type} message={toast.message} onClose={hideToast} />
}

export default Toast