import GrafikKepuasanMasyarakat from './grafik-kepuasan-masyarakat'

const GrafikContainer = () => {
    return (
        <section className="my-20">
            <div className="container mx-auto grid grid-cols-12">
                <GrafikKepuasanMasyarakat className="col-span-12 mx-4 md:mx-0 md:col-span-8" />
            </div>
        </section>
    )
}

export default GrafikContainer
