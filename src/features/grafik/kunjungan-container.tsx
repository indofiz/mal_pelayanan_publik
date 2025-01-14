import { cn } from '@/utils/utils'

interface IKujunganContainer {
    className?: string
}
const KunjunganContainer: React.FC<IKujunganContainer> = ({ className }) => {
    return (
        <div
            className={cn(
                'bg-white p-8 rounded-2xl border border-border_card relative overflow-clip',
                className
            )}
        >
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-black_line text-3xl text-center pl-0">
                    Indeks Kepuasan Masyarakat
                </h3>
                <div className="text-[80px] md:text-[120px] font-semibold text-black_line text-center">
                    90
                </div>
            </div>
        </div>
    )
}

export default KunjunganContainer
