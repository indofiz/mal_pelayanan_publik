const MapKontak = () => {
    return (
        <div className="mt-4 md:mt-0 px-2 md:flex-1">
            <div className="md:mb-8">
                <div className="text-center md:text-left text-3xl font-bold">
                    Kontak Kami
                </div>
                <div className="text-center mt-2 text-black_2 md:text-left">
                    Kami menyediakan berbagai media yang dapat anda hubungi
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-[2px] border inline-flex rounded-xl border-green_primary ">
                        <div className="size-11 grid place-content-center rounded-[10px] bg-green_primary">
                            <img src="/jadwal.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-black_line font-medium text-sm md:text-base">
                        Jadwal Kerja : Senin - Jumat, dari 08:00 - 16:00
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-[2px] border inline-flex rounded-xl border-green_primary ">
                        <div className="size-11 grid place-content-center rounded-[10px] bg-green_primary">
                            <img src="/location.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-black_line font-medium text-sm md:text-base">
                        Alamat : JL. Koba Depan Hotel Grand Safran
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-[2px] border inline-flex rounded-xl border-green_primary ">
                        <div className="size-11 grid place-content-center rounded-[10px] bg-green_primary">
                            <img src="/email.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-black_line font-medium text-sm md:text-base">
                        Email : mpp@pangkalpinangkota.go.id
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-[2px] border inline-flex rounded-xl border-green_primary ">
                        <div className="size-11 grid place-content-center rounded-[10px] bg-green_primary">
                            <img src="/whatapp.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-black_line font-medium text-sm md:text-base">
                        Whatapp : 08000000000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapKontak
