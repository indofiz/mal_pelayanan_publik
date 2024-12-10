import { usePencarianModalStore } from '@/store/modal/modal-pencarian'
import { Search } from 'lucide-react'
import TagsSearch from './tags-search'

const tags: string[] = [
    'KTP Elektronik',
    'Kartu Keluarga',
    'Akta Kelahiran',
    'Pindah Domisili',
    'Izin Usaha',
    'IMB/PBG',
    'Beasiswa',
    'BPJS Kesehatan',
    'Bantuan Sosial',
    'Kartu Prakerja',
    'Perbaikan Jalan',
    'SKCK',
    'Sertifikat Tanah',
    'Pajak Kendaraan',
    'PBB',
    'Vaksinasi',
    'Laporan Kehilangan',
    'Pengaduan Online',
]

export const SearchHomepage = () => {
    const { setOpen, keyword, setKeyword } = usePencarianModalStore()
    const handleClick = (value: string) => {
        setKeyword(value)
        setOpen(true)
    }

    return (
        <section id="form_input" className="-mt-3 md:-mt-24 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl md:max-w-none mx-auto px-4 md:px-10 py-8 rounded-2xl shadow-searchShadow">
                    <div className="bg-green_primary/20 px-3 md:px-4 py-4 rounded-lg flex gap-4 items-center">
                        <div className="flex flex-col md:flex-row gap-3 grow">
                            <button
                                onClick={() => setOpen(true)}
                                className="flex-1 flex gap-5 text-gray-500 py-4 w-full md:w-auto grow rounded-md px-5 bg-white overflow-hidden text-ellipsis"
                            >
                                <Search />{' '}
                                {keyword ? keyword : 'Masukan nama layanan'}
                            </button>
                            {/* <button className="flex-none w-full md:w-auto px-8 py-3 bg-black_line hover:bg-green_primary transition-all duration-500 text-white font-semibold rounded-md">
                                Cari Pelayanan
                            </button> */}
                        </div>
                    </div>

                    <div
                        id="tags"
                        className="flex mt-4 gap-3 md:flex-wrap overflow-x-auto"
                    >
                        {tags.map((item, index) => (
                            <TagsSearch
                                tags={item}
                                key={index}
                                onClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
