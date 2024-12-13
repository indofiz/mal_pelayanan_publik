import { useRegulasiQuery } from '@/common/query/query-regulasi'
import { Heading3 } from '../../components/heading3'
import { RegulasiList } from './regulasi-list'

export const RegulasiMPP = () => {
    const { data: dataRegulasi } = useRegulasiQuery()

    return (
        <section id="regulasi" className="-mt-3 lg:-mt-32 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl md:max-w-none mx-auto px-6 md:px-10 lg:px-12 py-8 pb-12 rounded-2xl shadow-searchShadow">
                    <Heading3
                        title="Regulasi Terkait MPP Kota Pangkalpinang"
                        className="text-left text-xl mb-2 lg:text-2xl"
                    />
                    <div className="flex flex-col gap-2 md:mt-8">
                        {dataRegulasi &&
                            dataRegulasi.data?.map((regulasi) => (
                                <RegulasiList
                                    key={regulasi.id_regulasi}
                                    title={regulasi.judul}
                                    link={regulasi.file}
                                />
                            ))}
                        <RegulasiList
                            title="Peraturan Presiden RI No 89 Tahun 2021 Tentang Penyelengaraan Mal Pelayanan Publik"
                            link="/regulasi/1"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
