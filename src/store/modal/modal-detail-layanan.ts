import { IInstansi } from '@/common/query/query-instansi'
import { create } from 'zustand'

interface LayananModalState {
    open: boolean
    formData?: IInstansi
    setOpen: (open: boolean) => void
    resetAll: () => void
    closeModal: () => void
    updateFormData: (formData: IInstansi) => void
}
const initialState = {
    open: false,
    formData: undefined,
}

export const useLayananModalStore = create<LayananModalState>((set) => ({
    ...initialState,
    setOpen: (open) => set({ open }),
    closeModal: () => set({ open: false }),
    resetAll: () => set(initialState),
    updateFormData: (formData) => set({ formData }),
}))
