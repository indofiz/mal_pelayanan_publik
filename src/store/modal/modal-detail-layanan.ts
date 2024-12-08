import { create } from 'zustand'

interface LayananModalState {
    open: boolean
    setOpen: (open: boolean) => void
    resetAll: () => void
    closeModal: () => void
}
const initialState = {
    open: false,
}

export const useLayananModalStore = create<LayananModalState>((set) => ({
    ...initialState,
    setOpen: (open) => set({ open }),
    closeModal: () => set({ open: false }),
    resetAll: () => set(initialState),
}))
