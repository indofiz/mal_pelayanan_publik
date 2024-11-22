import { BiDownload } from 'react-icons/bi'
import { Heading3 } from '../../components/heading3'

export const RegulasiMPP = () => {
    return (
        <section id="regulasi" className="-mt-3 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl mx-auto px-6 md:px-10 py-8 pb-12 rounded-2xl shadow-searchShadow">
                    <Heading3
                        title="Regulasi Terkait MPP Kota Pangkalpinang"
                        className="text-left text-xl mb-2"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 border-b border-gray-200 py-4">
                            <div className="text-sm font-semibold text-black_line">
                                Peraturan Presiden RI No 89 Tahun 2021 Tentang
                                Penyelengaraan Mal Pelayanan Publik
                            </div>
                            <div>
                                <button className="size-12 grid place-content-center hover:text-white hover:bg-green_primary transition-all duration-150 text-green_primary bg-white border border-green_primary rounded-lg">
                                    <BiDownload size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-b border-gray-200 py-4">
                            <div className="text-sm font-semibold text-black_line">
                                Peraturan Presiden RI No 89 Tahun 2021 Tentang
                                Penyelengaraan Mal Pelayanan Publik
                            </div>
                            <div>
                                <button className="size-12 grid place-content-center hover:text-white hover:bg-green_primary transition-all duration-150 text-green_primary bg-white border border-green_primary rounded-lg">
                                    <BiDownload size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-b border-gray-200 py-4">
                            <div className="text-sm font-semibold text-black_line">
                                Peraturan Presiden RI No 89 Tahun 2021 Tentang
                                Penyelengaraan Mal Pelayanan Publik
                            </div>
                            <div>
                                <button className="size-12 grid place-content-center hover:text-white hover:bg-green_primary transition-all duration-150 text-green_primary bg-white border border-green_primary rounded-lg">
                                    <BiDownload size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
