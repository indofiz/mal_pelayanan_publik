import AntrianForm1 from '../antrian-form-1'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
const StepperContentAntrian = () => {
    const { currentStep } = useStepperAntrianStore()

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
