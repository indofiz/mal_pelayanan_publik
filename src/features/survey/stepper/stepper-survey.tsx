import { useStepperStore } from '@/store/stepper/stepper-store'

interface SteppersDataProps {
    name: string
    deskripsi: string
}
const StepperSurvey = () => {
    const { currentStep, nextStep, prevStep } = useStepperStore()
    const steps_data: SteppersDataProps[] = [
        { name: 'Informasi Responden', deskripsi: 'Step 1' },
        { name: 'Pertanyaan Kusioner', deskripsi: 'Step 1' },
        { name: 'Saran', deskripsi: 'Step 1' },
    ] // Define your steps here

    return (
        <div>
            <div className="flex gap-0 lg:max-w-2xl mx-auto lg:justify-center lg:items-center">
                {steps_data.map((item, index) => (
                    <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-center lg:flex-auto gap-2 text-center relative">
                        <div className="absolute top-1/4 right-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                        <div className="p-1 border-2 border-gray-100 bg-white relative z-10 rounded-full">
                            <div className="bg-green_primary relative z-10 size-10 grid place-content-center text-white rounded-full">
                                {index + 1}
                            </div>
                        </div>
                        <div className="text-xs px-4 lg:font-semibold lg:text-base">
                            {item.name}
                        </div>
                    </div>
                    // {index === currentStep ? 'bold' : 'normal'}
                ))}
            </div>
            <div>
                <h2>{steps_data[currentStep].name}</h2>
                <button onClick={prevStep} disabled={currentStep === 0}>
                    Previous
                </button>
                <button
                    onClick={nextStep}
                    disabled={currentStep === steps_data.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepperSurvey
