import { CardLayananModal } from '@/features/list-instansi-pelayanan/card-layanan-modal'
import { CardModal } from '@/features/list-instansi-pelayanan/card-modal'
import { ScrollArea } from '../ui/scroll-area'
import { useLayananModalStore } from '@/store/modal/modal-detail-layanan'

const ContentLayanan = () => {
    const { formData } = useLayananModalStore()

    return (
        <ScrollArea className="px-4 h-[300px] px md:h-auto md:max-h-fit">
            <div className="flex flex-row items-center md:flex-row gap-7 md:px-0 mt-8 md:mt-0">
                <div className="w-40 md:w-auto">
                    <img src="example.png" className="w-16 md:w-20" alt="" />
                </div>
                <div className="md:max-w-md flex flex-col gap-2">
                    <h3 className="font-semibold text-lg md:text-2xl">
                        {formData?.instansi ?? '-'}
                    </h3>
                    <p className="text-sm md:text-base">
                        Detail instansi belum tersedia, silahkan edit dihalaman
                        admin
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-xl mb-3">Informasi</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3">
                    <CardModal
                        desc="Jumlah Layanan"
                        img="jumlah-layanan.png"
                        jumlah={formData?.total_layanan.toString() ?? '0'}
                    />
                    <CardModal
                        desc="Jumlah Loket"
                        img="jumlah-loket.png"
                        jumlah={formData?.no_tenant.toString() ?? '0'}
                    />
                    <CardModal
                        desc="Jumlah Petugas"
                        img="jumlah-petugas.png"
                        jumlah={formData?.jumlah_petugas.toString() ?? '0'}
                    />
                    <CardModal
                        desc="Total Kunjungan"
                        img="total-kunjungan.png"
                        jumlah={formData?.jumlah_petugas.toString() ?? '0'}
                    />
                </div>
            </div>
            <div className="mt-12 md:mt-8">
                <h3 className="font-semibold text-xl mb-3 md:mb-6">
                    Daftar Layanan
                </h3>
                <div>
                    <CardLayananModal />
                    <CardLayananModal />
                    <CardLayananModal />
                    <CardLayananModal />
                </div>
            </div>
        </ScrollArea>
    )
}

export default ContentLayanan
