import { CardPelayananKami } from './card-pelayanan-kami'

const PelayananKami = () => {
    return (
        <section className="text-black_line mt-12 md:mt-24 lg:mt-32 bg-gradient-to-b from-grad_sec_top to-grad_sec_bot py-8 md:py-16 pb-12">
            <div className="container mx-auto px-4 md:px-0">
                <h3 className="text-center font-semibold text-2xl md:text-5xl mb-6">
                    Pelayanan Kami
                </h3>
                <div className="flex gap-4 flex-col md:flex-row md:gap-8 lg:gap-12 md:mt-12 lg:mt-16">
                    <CardPelayananKami
                        img="layanan-prioritas.png"
                        title="Layanan Prioritas"
                        desc="Layanan bagi masyarakat yang mengurus langsung atau
                            investasi dengan modal diatas Rp. 10 miliar keatas."
                    />
                    <CardPelayananKami
                        img="layanan-mandiri.png"
                        title="Layanan Mandiri"
                        desc="Layanan yang ditujukan untuk masyarakat umum dan
                            penerima kuasa mengurus perizinan / non perizinan."
                    />
                    <CardPelayananKami
                        img="layanan-disabilitas.png"
                        title="Layanan Disabilitas"
                        desc="Layanan khusus dengan berbagai fasilitas penunjang
                            yang ditujukan bagi penyandang disabilitas."
                    />
                </div>
            </div>
        </section>
    )
}

export default PelayananKami
