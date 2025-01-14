import { cn } from '@/utils/utils'
import ChartKunjungan from './kunjungan-chart'
import { useState } from 'react'
import { useKunjunganQuery } from '@/common/query/query-kunjungan'

interface IKujunganContainer {
    className?: string
}
const active = ['harian', 'mingguan', 'bulanan']
const subTitle = [
    'Satu bulan terakhir dari hari ini.',
    'Mingguan pada bulan ini.',
    'Bulanan pada tahun ini.',
]
const KunjunganContainer: React.FC<IKujunganContainer> = ({ className }) => {
    const [isActive, setIsActive] = useState('harian')

    const index = active.indexOf(isActive)
    const activeSubTitle = index === -1 ? '' : subTitle[index]

    const {
        data: dataKunjungan,
        isLoading,
        isRefetching,
        isFetching,
    } = useKunjunganQuery({
        type: isActive,
    })

    return (
        <div
            className={cn(
                'bg-white p-4 md:p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
            )}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-black_line text-lg md:text-3xl text-left pl-0">
                            Pengunjung MPP Kota Pangkalpinang
                        </h3>
                        <p className="font-semibold text-sm md:text-base text-gray-500">
                            {activeSubTitle}
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="bg-gray-200 p-2 rounded-lg flex gap-2">
                            <button
                                className={cn(
                                    'px-2 md:px-5 py-2 md:py-3 text-sm md:text-base rounded-lg ',
                                    isActive == 'harian'
                                        ? 'bg-white text-gray-700'
                                        : 'text-gray-600'
                                )}
                                onClick={() => setIsActive('harian')}
                            >
                                Harian
                            </button>
                            <button
                                className={cn(
                                    'px-2 md:px-5 py-2 md:py-3 text-sm md:text-base rounded-lg',
                                    isActive == 'mingguan'
                                        ? 'bg-white text-gray-700'
                                        : 'text-gray-600'
                                )}
                                onClick={() => setIsActive('mingguan')}
                            >
                                Mingguan
                            </button>
                            <button
                                className={cn(
                                    'px-2 md:px-5 py-2 md:py-3 text-sm md:text-base rounded-lg',
                                    isActive == 'bulanan'
                                        ? 'bg-white text-gray-700'
                                        : 'text-gray-600'
                                )}
                                onClick={() => setIsActive('bulanan')}
                            >
                                Bulanan
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    {dataKunjungan ? (
                        <ChartKunjungan
                            data={dataKunjungan}
                            isLoading={isLoading || isRefetching || isFetching}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default KunjunganContainer
