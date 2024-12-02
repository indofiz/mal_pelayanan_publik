import { BookAudioIcon, Info } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const CardLayananModal = () => {
    return (
        <div className="flex gap-3 flex-col">
            <div className="border-b border-border py-4 flex justify-between items-center">
                <div className="font-semibold">Pengajuan UMKM</div>
                <div className="flex gap-4">
                    <Link
                        to=""
                        className="text-green_primary flex gap-2 items-center p-4 py-2 border border-green_primary rounded-lg hover:bg-green_primary hover:text-white transition-all duration-200"
                    >
                        <Info size={20} />
                        Informasi
                    </Link>
                    <Link
                        to=""
                        className="text-green_primary flex gap-2 items-center p-4 py-2 border border-green_primary rounded-lg hover:bg-green_primary hover:text-white transition-all duration-200"
                    >
                        <BookAudioIcon size={20} />
                        Ambil Antrian
                    </Link>
                </div>
            </div>
        </div>
    )
}
