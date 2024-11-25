import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroSurvey from '../features/survey/header-hero-survey'
import StepperNumber from '../features/survey/stepper-number'
import SurveyForm3 from '@/features/survey/survey-form-3'

export const SurveyPage = () => {
    return (
        <>
            <Header>
                <HeroSurvey />
            </Header>
            <StepperNumber />
            <section id="form_survey" className="px-4 mt-6">
                {/* <SurveyForm1 /> */}
                <SurveyForm3 />
            </section>
            <Footer />
        </>
    )
}
