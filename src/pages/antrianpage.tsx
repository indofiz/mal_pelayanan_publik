import HeroAntrian from '@/features/antrian/header-hero-antrian'
import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import StepperNumberAntrian from '@/features/antrian/stepper-number'
export const AntrianPage = () => {
    return (
        <>
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
