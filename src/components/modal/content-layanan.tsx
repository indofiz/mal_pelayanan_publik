import { CardLayananModal } from '@/features/list-instansi-pelayanan/card-layanan-modal'
import { CardModal } from '@/features/list-instansi-pelayanan/card-modal'
import { ScrollArea } from '../ui/scroll-area'
import { useLayananModalStore } from '@/store/modal/modal-detail-layanan'
import { useInstansiDetailQuery } from '@/common/query/query-instansi-detail'
import LoadingContentInstansi from '../loading/loading-content-instansi'
import { useReportSKMTenantQuery } from '@/common/query/query-report-skm'
import LoadingSkm from '../loading/loading-skm'
import { cn } from '@/utils/utils'
import ChartGKMTenant from '@/features/grafik/chart-gkm-tenant'

const ContentLayanan = () => {
    const { formData } = useLayananModalStore()

    const { data: dataDetail, isLoading } = useInstansiDetailQuery({
        id: formData?.id_instansi ?? 0,
    })

    const { data: dataChart, isLoading: isLoadingChart } =
        useReportSKMTenantQuery({
            id: formData?.id_instansi.toString() ?? '',
        })

    if (isLoading || isLoadingChart) return <LoadingContentInstansi />

    return (
        <ScrollArea className="px-4 h-[500px] px md:h-auto md:max-h-[calc(100vh-100px)]">
            <div className="flex flex-row justify-start items-center md:flex-row gap-7 md:px-0 mt-8 md:mt-0">
                <div className="w-auto md:w-auto">
                    <img
                        src={dataDetail?.data.logo}
                        className="w-16 md:w-20"
                        alt={`Logo Instansi ${formData?.instansi}`}
                    />
                </div>
                <div className="w-full md:max-w-md flex flex-1 flex-col gap-2">
                    <h3 className="font-semibold text-lg md:text-2xl">
                        {dataDetail?.data.instansi ?? '-'}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500">
                        {dataDetail?.data.deskripsi ??
                            'Deskripsi Instansi Belum Tersedia, silahkan isi pada halaman admin'}
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-xl mb-3">Informasi</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3">
                    <CardModal
                        desc="Jumlah Layanan"
                        img="/image/layanan/jumlah-layanan.png"
                        jumlah={
                            dataDetail?.data.service.length
                                ? dataDetail?.data.service.length.toString()
                                : '0'
                        }
                    />
                    <CardModal
                        desc="Nomor Tenant"
                        img="/image/layanan/jumlah-loket.png"
                        jumlah={
                            dataDetail?.data.no_tenant
                                ? dataDetail?.data.no_tenant.toString()
                                : '0'
                        }
                    />
                    <CardModal
                        desc="Jumlah Petugas"
                        img="/image/layanan/jumlah-petugas.png"
                        jumlah={
                            dataDetail?.data.jumlah_petugas
                                ? dataDetail?.data.jumlah_petugas.toString()
                                : '0'
                        }
                    />
                    <CardModal
                        desc="Total Kunjungan"
                        img="/image/layanan/total-kunjungan.png"
                        jumlah={
                            dataDetail?.data.total_antrian
                                ? dataDetail?.data.total_antrian.toString()
                                : '0'
                        }
                    />
                </div>
            </div>
            <div className="mt-12 md:mt-8">
                <h3 className="font-semibold text-xl mb-3 md:mb-6">
                    Daftar Layanan
                </h3>

                <div>
                    {dataDetail?.data.service &&
                        dataDetail?.data.service.map((layanan) => (
                            <CardLayananModal
                                key={layanan.id_layanan}
                                layanan={layanan}
                            />
                        ))}
                </div>
            </div>
            <div
                className={cn(
                    'bg-white p-3 py-8 md:p-8 rounded-2xl border mt-6 border-border_card relative overflow-clip'
                )}
            >
                <div className="size-80 bg-gradient-to-br from-green_primary/40 to-green-50/5 opacity-60 rotate-90  blur-xl rounded-full absolute -top-32 -right-24"></div>
                <h3 className="font-semibold text-black_line text-3xl text-center pl-0">
                    Grafik Kepuasan Masyarakat
                </h3>
                <p className="mt-2 max-w-lg text-center mx-auto text-gray-500 text-sm font-light">
                    Grafik dibawah berdasarkan survey yang diisi oleh masyarakat
                    yang menggunakan layanan MPP
                </p>
                <div className="mt-6">
                    {!isLoading ? (
                        <ChartGKMTenant data={dataChart?.data ?? []} />
                    ) : (
                        <LoadingSkm />
                    )}
                </div>
            </div>
        </ScrollArea>
    )
}

export default ContentLayanan
