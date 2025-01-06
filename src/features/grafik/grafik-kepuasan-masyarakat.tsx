import { cn } from '@/utils/utils'
import ChartGKM from './chart-gkm'

interface IGrafikKepuasanMasyarakat {
    className: string
}
const GrafikKepuasanMasyarakat: React.FC<IGrafikKepuasanMasyarakat> = ({
    className,
}) => {
    return (
        <div
            className={cn(
                'bg-white p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
            )}
        >
            <div className="size-80 bg-gradient-to-br from-green_primary/40 to-green-50/5 opacity-60 rotate-90  blur-xl rounded-full absolute -top-32 -right-24"></div>
            <h3 className="font-semibold text-black_line text-3xl text-left pl-0">
                Grafik Kepuasan Masyarakat
            </h3>
            <div className="mt-6">
                <ChartGKM />
            </div>
        </div>
    )
}

export default GrafikKepuasanMasyarakat
