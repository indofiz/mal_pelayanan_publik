import { cn } from '@/utils/utils'
import { Heading3 } from '../../components/heading3'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { useFasilitasQuery } from '@/common/query/query-fasilitas'

export const FasilitasMPP = () => {
    const { data: dataFasilitas } = useFasilitasQuery()

    return (
        <section className="container mx-auto mt-12 md:mt-24">
            <Heading3 title="Fasilitas MPP" className="ml-6 mb-12" />
            <div className="">
                <PhotoProvider>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-6">
                        {dataFasilitas &&
                            dataFasilitas?.data?.map((fasilitas, index) => {
                                // Check if the index corresponds to a full-width image
                                const isFullWidth = index % 3 === 0 // 0, 3, 6, 9...

                                if (!fasilitas.foto) return

                                return (
                                    <div
                                        key={fasilitas.id_fasilitas}
                                        className={cn(
                                            'lg:col-span-1 relative',
                                            isFullWidth ? 'col-span-2' : ''
                                        )}
                                    >
                                        <span className="absolute top-2 left-0 px-4 rounded-r-md py-2 text-xs text-black_line bg-white/70 md:bg-white">
                                            {fasilitas.nama_fasilitas}
                                        </span>
                                        <PhotoView src={fasilitas.foto}>
                                            <img
                                                src={fasilitas.foto}
                                                alt={`Image ${fasilitas.nama_fasilitas}`}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </PhotoView>
                                    </div>
                                )
                            })}
                    </div>
                </PhotoProvider>
            </div>
        </section>
    )
}
