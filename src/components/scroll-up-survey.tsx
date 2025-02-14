import { useStepperStore } from '@/store/stepper/stepper-store'
import { useEffect } from 'react'
const ScrollToTopSurvey = () => {
    const { currentStep } = useStepperStore()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentStep])

    return null
}

export default ScrollToTopSurvey
