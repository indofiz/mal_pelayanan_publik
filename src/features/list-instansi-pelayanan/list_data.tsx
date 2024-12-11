import CardPelayanan from './card'
import { useInstansiQuery } from '@/common/query/query-instansi'

const ListData = () => {
    const { data, isLoading, isFetching, isRefetching } = useInstansiQuery()

    if (isLoading || isFetching || isRefetching) {
        return (
            <div className="flex gap-4 flex-col md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8">
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
                <InstansiLoadingCard />
            </div>
        )
    }

    return (
        <div className="flex gap-4 flex-col md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8">
            {data?.data?.map((instansi) => (
                <CardPelayanan key={instansi.id_instansi} instansi={instansi} />
            ))}
        </div>
    )
}

export default ListData

export const InstansiLoadingCard = () => (
    <div className="border flex flex-col justify-between border-border_card bg-white rounded-2xl p-4 md:p-8 relative z-0 overflow-clip">
        <div className="animate-pulse flex gap-4 items-center md:flex-col md:items-start">
            <div className="bg-slate-200/40 size-16 rounded"></div>

            <div className=" md:mt-2 flex flex-col gap-2 w-full">
                <div className="h-4 w-full text-lg bg-slate-200/40 rounded"></div>
                <div className="h-4 w-full text-lg bg-slate-200/40 rounded"></div>
            </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <div className="h-2  text-lg bg-slate-200/40 rounded"></div>
            <div className="h-2 text-lg bg-slate-200/40 rounded"></div>
            <div className="h-2 text-lg bg-slate-200/40 rounded"></div>
        </div>
        <div className="h-12 text-lg mt-6 bg-slate-200/40 rounded"></div>
    </div>
)
