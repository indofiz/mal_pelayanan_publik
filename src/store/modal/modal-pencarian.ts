import { create } from 'zustand'

interface PencarianModalState {
    keyword: string
    open: boolean
    setKeyword: (keyword: string) => void
    setOpen: (open: boolean) => void
    resetKeyword: () => void
    resetAll: () => void
    closeModal: () => void
}
const initialState = {
    keyword: '',
    open: false,
}

export const usePencarianModalStore = create<PencarianModalState>((set) => ({
    ...initialState,
    setKeyword: (keyword) => set(() => ({ keyword })),
    resetKeyword: () => set({ keyword: '' }),
    setOpen: (open) => set({ open }),
    closeModal: () => set({ open: false, keyword: '' }),
    resetAll: () => set(initialState),
}))
