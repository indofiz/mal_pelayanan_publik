import { cn } from '@/utils/utils'

interface IIndexKepuasan {
    className: string
}
const IndexKepuasan: React.FC<IIndexKepuasan> = ({ className }) => {
    return (
        <div
            className={cn(
                'bg-white p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
            )}
        >
            <div className="size-80 bg-gradient-to-br from-green_primary/40 to-green-50/5 opacity-60 rotate-90  blur-xl rounded-full absolute -top-32 -right-24"></div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-black_line text-3xl text-center pl-0">
                    Indeks Kepuasan Masyarakat
                </h3>
                <div className="text-[80px] md:text-[120px] font-semibold text-black_line text-center">
                    90
                </div>
            </div>
            <div className="mt-6 text-center">
                <div className="text-4xl font-semibold text-green_primary">
                    Sangat Baik
                </div>
                <div className="mt-3 text-black_line text-lg">
                    Dari 5000 Responden
                </div>
            </div>
        </div>
    )
}

export default IndexKepuasan
