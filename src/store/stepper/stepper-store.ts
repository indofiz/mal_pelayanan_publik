import { create } from 'zustand'

interface StepperState {
    currentStep: number
    formData: object
    setStep: (step: number) => void
    nextStep: () => void
    prevStep: () => void
    updateFormData: (value: object) => void
}

export const useStepperStore = create<StepperState>((set) => ({
    currentStep: 0,
    formData: {},
    setStep: (step) => set(() => ({ currentStep: step })),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    updateFormData: (value) =>
        set((state) => ({ ...state.formData, ...value })),
}))
