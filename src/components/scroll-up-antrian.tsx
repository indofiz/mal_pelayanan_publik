import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { useEffect } from 'react'
const ScrollToTopAntrian = () => {
    const { currentStep } = useStepperAntrianStore()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentStep])

    return null
}

export default ScrollToTopAntrian
