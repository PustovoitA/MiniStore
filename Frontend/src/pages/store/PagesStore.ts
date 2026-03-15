import { create } from "zustand";

interface TypesHistoryRoutes{
    list: string[],
    setPathInList: (path:string) => void,
    getList: () => string[],
    deletePath: (path:string) => void
}


const HistoryRoutes = create<TypesHistoryRoutes>((set, get) => ({
    list: [],

    setPathInList: (path) => {
        set((state) => ({list: [...state.list, path]}))
    },

    getList: () => {
        return get().list
    },

    deletePath: (path) => {
        set((state) => {
            const index = state.list.indexOf(path)

            if (index === -1) return state

            return {
            list: state.list.slice(0, index + 1)
            }
        })
    }
}));

export default HistoryRoutes;