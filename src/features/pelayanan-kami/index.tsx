const PelayananKami = () => {
    return (
        <section className="text-black_line mt-12 bg-gradient-to-b from-grad_sec_top to-grad_sec_bot py-8 pb-12">
            <div className="container mx-auto px-4 md:px-0">
                <h3 className="text-center font-semibold text-2xl mb-6">
                    Pelayanan Kami
                </h3>
                <div className="flex gap-4 flex-col">
                    <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="layanan-prioritas.png"
                                className="w-12"
                                alt=""
                            />
                            <div className="font-semibold text-xl">
                                Layanan Prioritas
                            </div>
                        </div>
                        <div className="font-light text-text_card text-sm leading-5 mt-2">
                            Layanan bagi masyarakat yang mengurus langsung atau
                            investasi dengan modal diatas Rp. 10 miliar keatas.
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="layanan-mandiri.png"
                                className="w-12"
                                alt=""
                            />
                            <div className="font-semibold text-xl">
                                Layanan Mandiri
                            </div>
                        </div>
                        <div className="font-light text-text_card text-sm leading-5 mt-2">
                            Layanan yang ditujukan untuk masyarakat umum dan
                            penerima kuasa mengurus perizinan / non perizinan.
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="layanan-disabilitas.png"
                                className="w-12"
                                alt=""
                            />
                            <div className="font-semibold text-xl">
                                Layanan Disabilitas
                            </div>
                        </div>
                        <div className="font-light text-text_card text-sm leading-5 mt-2">
                            Layanan khusus dengan berbagai fasilitas penunjang
                            yang ditujukan bagi penyandang disabilitas.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PelayananKami
