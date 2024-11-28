import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroSurvey from '../features/survey/header-hero-survey'
import StepperNumber from '../features/survey/stepper-number'
export const SurveyPage = () => {
    return (
        <>
            <Header>
                <div className="lg:max-w-5xl mx-auto md:mb-8 lg:mb-0">
                    <HeroSurvey />
                </div>
            </Header>
            <StepperNumber />
            {/* <section id="form_survey" className="px-4 mt-6">
                <SurveyForm1 />
            </section> */}
            <Footer />
        </>
    )
}
