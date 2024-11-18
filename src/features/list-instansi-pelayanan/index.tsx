import CardPelayanan from './card'

const ListInstansiPelayanan = () => {
    return (
        <section className="text-black_line mt-12">
            <div className="container mx-auto px-4 md:px-0">
                <h3 className="text-center font-semibold text-2xl mb-6">
                    Instansi Pelayanan
                </h3>
                <div className="flex gap-4 flex-col">
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
