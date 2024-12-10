import Antrian2Form1 from '../antrian-form-1'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { Antrian2Form2 } from '../antrian-form-2'
const StepperContentAntrian2 = () => {
    const { currentStep } = useStepperAntrianStore()

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Antrian2Form1 />
            case 1:
                return <Antrian2Form2 />
            default:
                return null
        }
    }

    return <div>{renderStep()}</div>
}

export default StepperContentAntrian2
