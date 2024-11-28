import { cn } from '@/utils/utils'
import { Heading3 } from '../../components/heading3'

const images = [
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
    'contoh.png',
]

export const FasilitasMPP = () => {
    return (
        <section className="container mx-auto mt-12 md:mt-24">
            <Heading3 title="Fasilitas MPP" className="ml-6 mb-12" />
            <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-6">
                    {images.map((image, index) => {
                        // Check if the index corresponds to a full-width image
                        const isFullWidth = index % 3 === 0 // 0, 3, 6, 9...

                        return (
                            <div
                                key={index}
                                className={cn(
                                    'lg:col-span-1',
                                    isFullWidth ? 'col-span-2' : ''
                                )}
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
