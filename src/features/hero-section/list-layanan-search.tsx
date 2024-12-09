import { IDataLayanan, useLayananQuery } from '@/common/query/query-layanan'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePencarianModalStore } from '@/store/modal/modal-pencarian'
import { Loader, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ListLayananSearch = () => {
    const { keyword } = usePencarianModalStore()
    const { data, isLoading, isError } = useLayananQuery({ keyword })
    return (
        <div className="px-4 mt-1 md:mt-2">
            <ScrollArea className="h-[300px] rounded-md border p-4 bg-white">
                {isError && <div>Terjadi kesalahan</div>}
                {isLoading && (
                    <div className="inset-0 flex justify-center gap-2 items-center absolute">
                        <Loader className=" animate-spin" />
                        Loading...
                    </div>
                )}
                {data && data?.data?.length
                    ? data?.data?.map((item) => (
                          <ListData key={item.id_layanan} data={item} />
                      ))
                    : null}
            </ScrollArea>
        </div>
    )
}

const ListData = ({ data }: { data: IDataLayanan }) => {
    return (
        <div className="py-2 px-2 flex justify-between items-center border rounded mb-2">
            <div className="flex gap-2 items-center font-semibold">
                <span className="rounded-full bg-green_primary hidden  text-white size-7 md:size-7 md:grid place-content-center">
                    <Tag size={15} />
                </span>
                <span>
                    {data.layanan.length > 30
                        ? data.layanan.slice(0, 20) + '...'
                        : data.layanan}{' '}
                </span>
            </div>
            <div>
                <Link
                    to={'/antrian/' + data.id_layanan}
                    className="border flex border-green_primary text-white bg-green_primary rounded-lg py-2 items-center px-2 text-xs"
                >
                    Ambil Antrian
                </Link>
            </div>
        </div>
    )
}
