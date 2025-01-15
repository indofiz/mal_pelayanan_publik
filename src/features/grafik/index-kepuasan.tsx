import { IReportSKM, useReportSKMQuery } from '@/common/query/query-report-skm'
import { cn } from '@/utils/utils'
import { transformData } from './gkm-utils'

interface IIndexKepuasan {
    className: string
}
const IndexKepuasan: React.FC<IIndexKepuasan> = ({ className }) => {
    const { data: dataReport, isLoading } = useReportSKMQuery()

    return (
        <div
            className={cn(
                'bg-white p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
            )}
        >
            {!isLoading ? (
                <DataTampil dataReport={dataReport?.data ?? []} />
            ) : null}
        </div>
    )
}

export default IndexKepuasan

export const DataTampil = ({ dataReport }: { dataReport: IReportSKM[] }) => {
    return (
        <>
            <div className="size-80 bg-gradient-to-br from-green_primary/40 to-green-50/5 opacity-60 rotate-90  blur-xl rounded-full absolute -top-32 -right-24"></div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-black_line text-3xl text-center pl-0 max-w-72 mx-auto">
                    Indeks Kepuasan Masyarakat
                </h3>
                <NilaiIndexKepuasan data={dataReport ?? []} />
            </div>
            <div className="mt-6 text-center">
                <StatusIndexKepuasan data={dataReport ?? []} />
                <TotalResponden data={dataReport ?? []} />
            </div>
        </>
    )
}

export const NilaiIndexKepuasan: React.FC<{ data: IReportSKM[] }> = ({
    data,
}) => {
    const dataChart = transformData(data)
    const countTotal = dataChart.reduce((acc, curr) => acc + curr.persentase, 0)
    const average = Math.floor(countTotal / dataChart.length)
    return (
        <div className="text-[80px] md:text-[120px] font-semibold text-black_line text-center">
            {average}
        </div>
    )
}

export const StatusIndexKepuasan: React.FC<{ data: IReportSKM[] }> = ({
    data,
}) => {
    const dataChart = transformData(data)
    const countTotal = dataChart.reduce((acc, curr) => acc + curr.persentase, 0)
    const average = Math.floor(countTotal / dataChart.length)

    const status = ({ score }: { score: number }) => {
        switch (true) {
            case score >= 88.31 && score <= 100:
                return <p className="text-green_primary">Sangat Baik</p>
            case score >= 76.6 && score <= 88.3:
                return <p className="text-grreen_primary">Baik</p>
            case score >= 65 && score <= 76.59:
                return <p className="text-yellow_primary">Kurang Baik</p>
            case score >= 25 && score <= 64.99:
                return <p className="text-yellow_primary">Tidak Baik</p>
            default:
                return <p className="text-red-600">Sangat Tidak Baik</p>
        }
    }

    return (
        <div className="text-4xl font-semibold text-green_primary">
            {status({ score: average })}
        </div>
    )
}

export const TotalResponden: React.FC<{ data: IReportSKM[] }> = ({ data }) => {
    const totalAnswer = data.reduce((acc, curr) => acc + curr.total_answers, 0)
    return (
        <div className="mt-3 text-black_line text-lg">
            Dari {totalAnswer} Responden
        </div>
    )
}
