import { useParams } from 'react-router-dom'
import TitleHeader from '../../components/title-header'
import { useDetailLayananQuery } from '@/common/query/query-layanan-detail'

const HeroAntrian = () => {
    const { layanan } = useParams()

    const { data: layananDetailData, isLoading } = useDetailLayananQuery({
        id: layanan || '',
    })

    return (
        <div className="container mx-auto pb-4 lg:pb-12 md:px-4 lg:px-0">
            <div className="pb-12  lg:text-center lg:mt-12">
                <TitleHeader
                    isCenter
                    title="Daftar Online"
                    subTitle={
                        layanan
                            ? `Lakukan Daftar Online layanan ${
                                  layananDetailData?.data?.layanan ?? ''
                              } ${layananDetailData?.data?.nama_instansi}`
                            : isLoading
                            ? 'Loading...'
                            : 'Lakukan Daftar Online di Pangkalpinang'
                    }
                    classNameSub="-mt-3 md:-mt-4"
                />
            </div>
        </div>
    )
}

export default HeroAntrian
