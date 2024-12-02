import { CardLayananModal } from '@/features/list-instansi-pelayanan/card-layanan-modal'
import { CardModal } from '@/features/list-instansi-pelayanan/card-modal'

const ContentLayanan = () => {
    return (
        <div className="px-4 max-h-[500px] md:max-h-fit overflow-y-scroll md:overflow-y-visible">
            <div className="flex flex-col md:flex-row gap-7 md:items-center">
                <div>
                    <img src="example.png" className="w-16 md:w-20" alt="" />
                </div>
                <div className="md:max-w-md flex flex-col gap-2">
                    <h3 className="font-semibold text-lg md:text-2xl">
                        Dinas Penanaman Modal dan PTSP
                    </h3>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris condimentum massa purus.
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-xl mb-3">Informasi</h3>
                <div className="flex gap-3">
                    <CardModal
                        desc="Jumlah Layanan"
                        img="jumlah-layanan.png"
                        jumlah="04"
                    />
                    <CardModal
                        desc="Jumlah Loket"
                        img="jumlah-loket.png"
                        jumlah="04"
                    />
                    <CardModal
                        desc="Jumlah Petugas"
                        img="jumlah-petugas.png"
                        jumlah="04"
                    />
                    <CardModal
                        desc="Total Kunjungan"
                        img="total-kunjungan.png"
                        jumlah="04"
                    />
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-xl mb-6">Daftar Layanan</h3>
                <div>
                    <CardLayananModal />
                    <CardLayananModal />
                    <CardLayananModal />
                    <CardLayananModal />
                </div>
            </div>
        </div>
    )
}

export default ContentLayanan
