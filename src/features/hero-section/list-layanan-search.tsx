import { IDataLayanan, useLayananQuery } from '@/common/query/query-layanan'
import { usePencarianModalStore } from '@/store/modal/modal-pencarian'
import { Link } from 'react-router-dom'

export const ListLayananSearch = () => {
    const { keyword } = usePencarianModalStore()
    const { data } = useLayananQuery({ keyword })
    return (
        <div className="px-4 py-2 flex flex-col gap-2 h-[200px] overflow-y-scroll">
            {data && data?.data?.length
                ? data?.data?.map((item) => (
                      <ListData key={item.id_layanan} data={item} />
                  ))
                : null}
        </div>
    )
}

const ListData = ({ data }: { data: IDataLayanan }) => {
    return (
        <div className="py-2 px-2 flex justify-between items-center">
            {data.layanan}{' '}
            <div>
                <Link
                    to={'/antrian/' + data.id_layanan}
                    className="border flex border-gray-300 rounded-lg py-2 items-center px-2 text-xs"
                >
                    Ambil Antrian
                </Link>
            </div>
        </div>
    )
}
