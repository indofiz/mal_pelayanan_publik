import { create } from 'zustand'

interface StepperAntrianState {
    currentStep: number
    formData: object
    setStep: (step: number) => void
    nextStep: () => void
    prevStep: () => void
    updateFormData: (value: object) => void
}

export const useStepperAntrianStore = create<StepperAntrianState>((set) => ({
    currentStep: 0,
    formData: {},
    setStep: (step) => set(() => ({ currentStep: step })),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    updateFormData: (value) =>
        set((state) => ({ formData: { ...state.formData, ...value } })),
}))
