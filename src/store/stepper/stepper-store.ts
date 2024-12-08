import { DataResponden } from '@/common/query/query-responden'
import { create } from 'zustand'

interface StepperState {
    currentStep: number
    formData: object
    respondenData: DataResponden
    pertanyaanData: object
    setStep: (step: number) => void
    nextStep: () => void
    prevStep: () => void
    reset: () => void
    updateFormData: (value: object) => void
    updateRespondenData: (value: DataResponden) => void
    updatePertanyaanData: (value: object) => void
}

const initialState = {
    currentStep: 0,
    formData: {},
    respondenData: {},
    pertanyaanData: {},
}

export const useStepperStore = create<StepperState>((set) => ({
    ...initialState,
    setStep: (step) => set(() => ({ currentStep: step })),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    updateFormData: (value) =>
        set((state) => ({ formData: { ...state.formData, ...value } })),
    updateRespondenData: (value) =>
        set((state) => ({
            respondenData: { ...state.respondenData, ...value },
        })),
    updatePertanyaanData: (value) =>
        set((state) => ({
            pertanyaanData: { ...state.pertanyaanData, ...value },
        })),
    reset: () => set(initialState),
}))
