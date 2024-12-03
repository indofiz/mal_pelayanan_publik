import { useStepperStore } from '@/store/stepper/stepper-store'
import { cn } from '@/utils/utils'
import { Check } from 'lucide-react'

interface SteppersDataProps {
    name: string
    deskripsi: string
}
const StepperAntrian = () => {
    const { currentStep, nextStep, prevStep } = useStepperStore()

    const steps_data: SteppersDataProps[] = [
        { name: 'Informasi Pribadi', deskripsi: 'Step 1' },
        { name: 'Pilih Tanggal Waktu', deskripsi: 'Step 2' },
    ] // Define your steps here

    return (
        <div>
            <div className="flex gap-0 lg:max-w-lg mx-auto lg:justify-center lg:items-center">
                {steps_data.map((item, index) => (
                    <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-center lg:flex-auto gap-0 text-center relative">
                        {index == 0 ? (
                            <div className="absolute top-1/4 right-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                        ) : null}
                        {index > 0 && index < steps_data.length - 1 ? (
                            <>
                                <div className="absolute top-1/4 right-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                                <div className="absolute top-1/4 left-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                            </>
                        ) : null}
                        {index == steps_data.length - 1 ? (
                            <div className="absolute top-1/4 left-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                        ) : null}
                        <div className="p-1 border-2 border-gray-100 bg-white relative z-10 rounded-full">
                            <div
                                className={cn(
                                    'bg-green_primary relative z-10 size-10 grid place-content-center text-white rounded-full ',
                                    currentStep === index
                                        ? 'bg-green_primary'
                                        : 'bg-gray-100 text-gray-400',
                                    currentStep < index
                                        ? 'bg-gray-100'
                                        : 'bg-green_primary text-white'
                                )}
                            >
                                {index < currentStep ? (
                                    <Check size={16} />
                                ) : (
                                    index + 1
                                )}
                            </div>
                        </div>
                        <div
                            className={cn(
                                'text-xs px-4 lg:font-semibold lg:text-base',
                                currentStep === index
                                    ? 'font-semibold'
                                    : 'text-gray-400'
                            )}
                        >
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

export default StepperAntrian
