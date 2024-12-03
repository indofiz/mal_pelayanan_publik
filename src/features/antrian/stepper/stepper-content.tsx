import { useStepperStore } from '@/store/stepper/stepper-store'
import AntrianForm1 from '../antrian-form-1'
const StepperContentAntrian = () => {
    const { currentStep } = useStepperStore()

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <AntrianForm1 />
            case 1:
                return <>bb</>
            default:
                return null
        }
    }

    return <div>{renderStep()}</div>
}

export default StepperContentAntrian
