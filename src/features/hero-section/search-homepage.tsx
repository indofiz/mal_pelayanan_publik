import { Search } from 'lucide-react'

export const SearchHomepage = () => {
    return (
        <section id="form_input" className="-mt-3 md:-mt-24 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white max-w-6xl md:max-w-none mx-auto px-4 md:px-10 py-8 rounded-2xl shadow-searchShadow">
                    <div className="bg-green_primary/20 px-3 md:px-4 py-4 rounded-lg flex gap-4 items-center">
                        <div className="hidden md:block text-green_primary md:pl-4">
                            <Search />
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 grow">
                            <input
                                type="text"
                                className="flex-1 py-4 md:py-auto w-full md:w-auto grow rounded-md px-5"
                                placeholder="Cari keyword pelayanan, contoh : KTP, Nikah, Pajak, dan lain -lain "
                            />
                            <button className="flex-none w-full md:w-auto px-8 py-3 bg-black_line hover:bg-green_primary transition-all duration-500 text-white font-semibold rounded-md">
                                Cari Pelayanan
                            </button>
                        </div>
                    </div>

                    <div
                        id="tags"
                        className="flex mt-4 gap-3 md:flex-wrap overflow-x-auto"
                    >
                        <div className="bg-green_primary/20 px-4 py-2 rounded-md text-green_primary">
                            Bangunan
                        </div>
                        <div className="bg-green_primary/20 px-4 py-2 rounded-md text-green_primary">
                            Bangunan
                        </div>
                        <div className="bg-green_primary/20 px-4 py-2 rounded-md text-green_primary">
                            Bangunan
                        </div>
                        <div className="bg-green_primary/20 px-4 py-2 rounded-md text-green_primary">
                            Bangunan
                        </div>
                        <div className="bg-green_primary/20 px-4 py-2 rounded-md text-green_primary">
                            Bangunan
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
