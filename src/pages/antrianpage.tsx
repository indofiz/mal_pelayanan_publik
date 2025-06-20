import HeroAntrian from '@/features/antrian/header-hero-antrian'
import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import StepperNumberAntrian from '@/features/antrian/stepper-number'
import { useParams } from 'react-router-dom'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { useEffect } from 'react'
import ScrollToTopAntrian from '@/components/scroll-up-antrian'
const AntrianPage = () => {
    const { layanan } = useParams()
    const { updateFormData, reset } = useStepperAntrianStore()

    useEffect(() => {
        reset()
        if (layanan) updateFormData({ id_layanan: layanan.toString() })
    }, [layanan, updateFormData, reset])

    return (
        <>
            <ScrollToTopAntrian />
            <Header>
                <div className="lg:max-w-5xl mx-auto md:mb-8 lg:mb-0">
                    <HeroAntrian />
                </div>
            </Header>
            <StepperNumberAntrian />
            <Footer />
        </>
    )
}

export default AntrianPage
