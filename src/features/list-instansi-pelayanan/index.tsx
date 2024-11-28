import CardPelayanan from './card'

const ListInstansiPelayanan = () => {
    return (
        <section className="text-black_line mt-12 md:mt-24">
            <div className="container mx-auto px-4 md:px-0">
                <h3 className="text-center md:text-left md:mb-12 lg:mb-14 font-semibold text-2xl md:text-5xl mb-6">
                    Instansi Pelayanan
                </h3>
                <div className="flex gap-4 flex-col md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 lg:gap-8">
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                    <CardPelayanan />
                </div>
            </div>
        </section>
    )
}

export default ListInstansiPelayanan
