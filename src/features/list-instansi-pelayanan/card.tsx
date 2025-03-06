import { IInstansi } from '@/common/query/query-instansi'
import { useLayananModalStore } from '@/store/modal/modal-detail-layanan'

const CardPelayanan = ({ instansi }: { instansi: IInstansi }) => {
    const { setOpen, updateFormData } = useLayananModalStore()
    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = '/image/state/photo.png'
    }

    return (
        <div className="border flex flex-col justify-between border-neutral-200 md:border-border_card bg-white rounded-2xl p-4 md:p-8 relative z-0 overflow-clip">
            <div>
                <div className="size-36 bg-gradient-to-br via-green_thin from-green_primary opacity-50 rotate-90 to-white rounded-full absolute -top-12 -right-10 -z-[1]"></div>
                <div className="flex gap-4 items-center md:flex-col md:items-start">
                    <img
                        src={instansi.logo}
                        onError={handleImageError}
                        className="w-12 md:w-16"
                        alt=""
                    />
                    <div className="size-10 bg-slate-200/35 rounded-full absolute left-9 top-10 md:top-16 md:left-16 -z-[4]"></div>
                    <div className="size-11 bg-slate-200/35 rounded-full absolute left-3 top-4 md:top-8 md:left-4 -z-[4]"></div>
                    <div className="font-semibold text-lg leading-6 md:text-2xl md:mt-2">
                        <span className="capitalize">{instansi?.instansi}</span>
                    </div>
                </div>
                <div className="text-sm font-light text-neutral-600 md:text-text_card mt-3">
                    {instansi?.deskripsi ??
                        'Deskripsi Instansi Belum Tersedia, silahkan isi pada halaman admin'}
                </div>
            </div>
            <button
                onClick={() => {
                    updateFormData(instansi)
                    setOpen(true)
                }}
                className="bg-white border border-green_primary rounded-lg flex w-full justify-center py-3 px-4 font-semibold text-green_primary hover:bg-green_primary hover:text-white transition-all duration-100 mt-3"
            >
                Lihat Layanan
            </button>
        </div>
    )
}

export default CardPelayanan
