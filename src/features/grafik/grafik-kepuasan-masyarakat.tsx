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
                'bg-white p-8 rounded-2xl border border-border_card relative',
                className
            )}
        >
            <h3 className="font-semibold text-black_line text-2xl text-center">
                Grafik Kepuasan Masyarakat
            </h3>
            <div className="mt-8">
                <ChartGKM />
            </div>
        </div>
    )
}

export default GrafikKepuasanMasyarakat
