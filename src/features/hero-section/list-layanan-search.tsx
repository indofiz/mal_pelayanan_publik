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
            <ScrollArea className="h-[300px] rounded-md border p-4 bg-white relative">
                {isError && <div>Terjadi kesalahan</div>}
                {isLoading && (
                    <div className="inset-0 flex justify-center gap-2 items-center absolute">
                        <Loader className=" animate-spin" />
                        Loading...
                    </div>
                )}
                {!isError && !isLoading && data && data?.data?.length
                    ? data?.data?.map((item) => (
                          <ListData key={item.id_layanan} data={item} />
                      ))
                    : null}
                {!isError && !isLoading && data && data?.data?.length == 0 ? (
                    <div className="inset-0 absolute grid place-content-center">
                        <div className="flex flex-col justify-center items-center max-w-xs text-center">
                            <img src="/file.png" className="w-20" alt="" />
                            <div className="font-semibold mt-4 text-lg">
                                Layanan Tidak Ditemukan
                            </div>
                            <p className="text-gray-500 mt-1 font-normal">
                                Silahkan lakukan pencarian dengan keyword yang
                                berbeda.
                            </p>
                        </div>
                    </div>
                ) : null}
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
                        ? data.layanan.slice(0, 30) + '...'
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
