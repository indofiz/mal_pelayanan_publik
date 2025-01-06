import { IDataLayanan } from '@/common/query/query-layanan'
import { create } from 'zustand'

interface LayananModalState {
    open: boolean
    formData?: IDataLayanan
    setOpen: (open: boolean) => void
    resetAll: () => void
    closeModal: () => void
    updateFormData: (formData: IDataLayanan) => void
}
const initialState = {
    open: false,
    formData: undefined,
}

export const useLayananDeskripsiModalStore = create<LayananModalState>(
    (set) => ({
        ...initialState,
        setOpen: (open) => set({ open }),
        closeModal: () => set({ open: false }),
        resetAll: () => set(initialState),
        updateFormData: (formData) => set({ formData }),
    })
)
