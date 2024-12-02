import StepperContentSurvey from './stepper/stepper-content'
import StepperSurvey from './stepper/stepper-survey'

const StepperNumber = () => {
    return (
        <section id="regulasi" className="-mt-16 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl mx-auto px-2 md:px-10 py-6 rounded-2xl shadow-searchShadow">
                    <StepperSurvey />

                    <div className="mx-4 mt-8 md:mt-12 md:max-w-md md:mx-auto mb-12">
                        <StepperContentSurvey />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepperNumber
