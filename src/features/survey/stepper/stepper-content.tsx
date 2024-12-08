import { useStepperStore } from '@/store/stepper/stepper-store'
import SurveyForm1 from '../survey-form-1'
import { SurveyForm2 } from '../survey-form-2'
import { SurveyForm3 } from '../survey-form-3'

const StepperContentSurvey = () => {
    const { currentStep } = useStepperStore()

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <SurveyForm1 />
            case 1:
                return <SurveyForm2 />
            case 2:
                return <SurveyForm3 />
            default:
                return null
        }
    }

    return <div>{renderStep()}</div>
}

export default StepperContentSurvey
