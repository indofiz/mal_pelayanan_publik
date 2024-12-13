import { IDataLayanan } from '@/common/query/query-layanan'
import { BookAudioIcon, Info } from 'lucide-react'

import { Link } from 'react-router-dom'

export const CardLayananModal = ({ layanan }: { layanan: IDataLayanan }) => {
    return (
        <div className="flex gap-3 flex-col">
            <div className="border-b border-border py-4 flex flex-col md:flex-row gap-3 md:gap-2 justify-between  md:items-center">
                <div className="font-medium text-sm md:text-base md:font-medium flex-1">
                    {layanan.layanan}
                </div>
                <div className="flex gap-2 md:gap-4">
                    <Link
                        to=""
                        className="text-green_primary flex gap-2 items-center p-2 py-1 md:p-4 md:py-2 text-xs md:text-base border border-green_primary rounded-lg hover:bg-green_primary hover:text-white transition-all duration-200"
                    >
                        <Info size={20} />
                        <span>Informasi</span>
                    </Link>
                    <Link
                        to={`/antrian/${layanan.id_layanan}`}
                        className="text-green_primary flex gap-2 items-center p-2 py-1 md:p-4 md:py-2 text-xs md:text-base border border-green_primary rounded-lg hover:bg-green_primary hover:text-white transition-all duration-200"
                    >
                        <BookAudioIcon size={20} />
                        <span>Ambil Antrian</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
