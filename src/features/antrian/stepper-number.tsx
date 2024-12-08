import StepperAntrian from './stepper/stepper-antrian'
import StepperContentAntrian from './stepper/stepper-content'

const StepperNumberAntrian = () => {
    return (
        <section id="antrian-container" className="-mt-16 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl mx-auto px-2 md:px-10 py-6 rounded-2xl shadow-searchShadow">
                    <StepperAntrian />

                    <div className="mx-4 mt-8 md:mt-12 md:max-w-md md:mx-auto mb-12">
                        <StepperContentAntrian />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepperNumberAntrian
