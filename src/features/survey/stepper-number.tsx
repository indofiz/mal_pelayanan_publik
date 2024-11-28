import { SurveyForm2 } from './survey-form-2'

const StepperNumber = () => {
    return (
        <section id="regulasi" className="-mt-16 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl mx-auto px-2 md:px-10 py-6 rounded-2xl shadow-searchShadow">
                    <div className="flex gap-0 lg:max-w-2xl mx-auto lg:justify-center lg:items-center">
                        <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-center lg:flex-auto gap-2 text-center relative">
                            <div className="absolute top-1/4 right-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                            <div className="p-1 border-2 border-gray-100 bg-white relative z-10 rounded-full">
                                <div className="bg-green_primary relative z-10 size-10 grid place-content-center text-white rounded-full">
                                    1
                                </div>
                            </div>
                            <div className="text-xs px-4 lg:font-semibold lg:text-base">
                                Informasi Responden
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-center lg:flex-auto gap-2 text-center relative">
                            <div className="absolute top-1/4 right-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                            <div className="absolute top-1/4 left-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                            <div className="p-1 border-2 border-gray-100 bg-white relative z-10 rounded-full">
                                <div className="bg-gray-100 relative z-10 size-10 grid place-content-center text-gray-400 rounded-full">
                                    2
                                </div>
                            </div>
                            <div className="text-xs px-4 text-gray-400 lg:font-semibold lg:text-base">
                                Pertanyaan Kusioner
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row items-center lg:justify-center lg:flex-auto gap-2 text-center relative">
                            <div className="absolute top-1/4 left-0 h-[2px] w-1/2 bg-gray-100 z-0 lg:hidden"></div>
                            <div className="p-1 border-2 border-gray-100 bg-white relative z-10 rounded-full">
                                <div className="bg-gray-100 relative z-10 size-10 grid place-content-center text-gray-400 rounded-full">
                                    3
                                </div>
                            </div>
                            <div className="text-xs px-4 text-gray-400 lg:font-semibold lg:text-base">
                                Saran
                            </div>
                        </div>
                    </div>

                    <div className="mx-4 mt-8 md:mt-12 md:max-w-md md:mx-auto mb-12">
                        <SurveyForm2 />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepperNumber
