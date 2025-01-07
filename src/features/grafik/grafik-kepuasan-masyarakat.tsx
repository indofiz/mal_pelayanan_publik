import { cn } from '@/utils/utils'
import ChartGKM from './chart-gkm'
import { useReportSKMQuery } from '@/common/query/query-report-skm'

interface IGrafikKepuasanMasyarakat {
    className: string
}
const GrafikKepuasanMasyarakat: React.FC<IGrafikKepuasanMasyarakat> = ({
    className,
}) => {
    const { data: dataReport, isLoading } = useReportSKMQuery()
    return (
        <div
            className={cn(
                'bg-white p-3 py-8 md:p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
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
                    <ChartGKM data={dataReport?.data ?? []} />
                ) : (
                    <>LOADING...</>
                )}
            </div>
        </div>
    )
}

export default GrafikKepuasanMasyarakat
