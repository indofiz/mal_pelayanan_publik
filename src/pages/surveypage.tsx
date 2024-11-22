import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroSurvey from '../features/survey/header-hero-survey'
import StepperNumber from '../features/survey/stepper-number'

export const SurveyPage = () => {
    return (
        <>
            <Header>
                <HeroSurvey />
            </Header>
            <StepperNumber />

            <Footer />
        </>
    )
}
