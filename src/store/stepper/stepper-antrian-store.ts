import { create } from 'zustand'

interface StepperAntrianState {
    currentStep: number
    formData: object
    setStep: (step: number) => void
    nextStep: () => void
    prevStep: () => void
    reset: () => void
    updateFormData: (value: object) => void
}

const initialState = { currentStep: 0, formData: {} }

export const useStepperAntrianStore = create<StepperAntrianState>((set) => ({
    ...initialState,
    setStep: (step) => set(() => ({ currentStep: step })),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    updateFormData: (value) =>
        set((state) => ({ formData: { ...state.formData, ...value } })),
    reset: () => set(initialState),
}))
