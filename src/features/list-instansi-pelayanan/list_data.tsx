import InstansiLoadingCard from '@/components/loading/loading-instansi-card'
import CardPelayanan from './card'
import { useInstansiQuery } from '@/common/query/query-instansi'

const ListData = () => {
    const { data, isLoading, isFetching, isRefetching, isError } =
        useInstansiQuery()

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

    if (isError || data?.data?.length == 0) {
        return (
            <div className="max-w-72 mx-auto ">
                <img
                    src="/image/state/no_data.png"
                    className="w-48 mx-auto"
                    alt=""
                />
                <div>
                    <h3 className="text-center text-2xl mt-6 font-semibold text-black_line">
                        Tidak Ada Data atau Server Bermasalah
                    </h3>
                    <p className="text-center mt-2 text-gray-500 font-light">
                        Silahkan coba lagi, atau tunggu sampai server kembali
                        aktif.
                    </p>
                </div>
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
