import ListData from './list_data'

const ListInstansiPelayanan = ({ isTitle = true }: { isTitle?: boolean }) => {
    return (
        <section className="text-black_line mt-12 md:mt-24 md:px-4 lg:px-0">
            <div className="container mx-auto px-4 md:px-0">
                {isTitle ? (
                    <h3 className="text-center md:text-left md:mb-12 lg:mb-14 font-semibold text-2xl md:text-5xl mb-6">
                        Instansi Pelayanan
                    </h3>
                ) : null}
                <ListData />
            </div>
        </section>
    )
}

export default ListInstansiPelayanan
