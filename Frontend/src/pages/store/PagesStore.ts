import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TypesHistoryRoutes{
    list: string[],
    setPathInList: (path:string) => void,
    deletePath: (path:string) => void
}

const HistoryRoutes = create<TypesHistoryRoutes>()(
  persist(
    (set) => ({
      list: ["/Home"],

    setPathInList: (path) => {
        set((state) => {
            if (state.list[state.list.length - 1] === path) return state

            return {
                list: [...state.list, path]
            }
        })
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
    }),
    {
      name: "history-routes-storage"
    }
  )
);

export default HistoryRoutes;