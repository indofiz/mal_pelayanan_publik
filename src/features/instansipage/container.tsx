import ListInstansiPelayanan from '../list-instansi-pelayanan'

const ContainerInstansiPage = () => {
    return (
        <section id="antrian-container" className="-mt-16 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white mx-auto px-2 md:px-10 py-1 pb-6 rounded-2xl shadow-searchShadow">
                    <ListInstansiPelayanan isTitle={false} />
                </div>
            </div>
        </section>
    )
}

export default ContainerInstansiPage
