import { useParams } from 'react-router-dom'
import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroSurvey from '../features/survey/header-hero-survey'
import StepperNumber from '../features/survey/stepper-number'
import { useDetailAntrianQuery } from '@/common/query/query-antrian-detail'
import { useStepperStore } from '@/store/stepper/stepper-store'
import ScrollToTopSurvey from '@/components/scroll-up-survey'
export const SurveyPage = () => {
    const { survey } = useParams()
    const { updateRespondenData } = useStepperStore()

    const { isLoading } = useDetailAntrianQuery({
        id: survey || '',
        onSuccess: (data) => {
            if (data.status === 'success') {
                const newData = {
                    whatsapp: data?.data?.mobile ?? '',
                    usia: data?.data?.usia ?? 0,
                    gender:
                        data?.data?.jenis_kelamin == 'L'
                            ? 'LAKI LAKI'
                            : 'PEREMPUAN',
                    statusKawin: data?.data?.status_kawin ?? '',
                    pendidikan: data?.data?.pendidikan ?? '',
                    pekerjaan: data?.data?.pekerjaan ?? '',
                    statusMengurus:
                        data?.data?.jenis_permohonan == '1'
                            ? 'SENDIRI'
                            : 'DIKUASAKAN',
                    tenantId: String(data?.data?.id_instansi),
                    layananId: String(data?.data?.id_layanan),
                }
                updateRespondenData(newData)
            }
        },
    })

    return (
        <>
            <ScrollToTopSurvey />
            <Header>
                <div className="lg:max-w-5xl mx-auto md:mb-8 lg:mb-0">
                    <HeroSurvey />
                </div>
            </Header>
            {!isLoading && <StepperNumber />}
            <Footer />
        </>
    )
}
