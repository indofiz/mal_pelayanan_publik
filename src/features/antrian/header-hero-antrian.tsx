import TitleHeader from '../../components/title-header'

const HeroAntrian = () => {
    return (
        <div className="container mx-auto pb-4 lg:pb-12 md:px-4 lg:px-0">
            <div className="pb-12  lg:text-center lg:mt-12">
                <TitleHeader
                    isCenter
                    title="Antrian Online"
                    subTitle="Dinas Dukcapil Layanan Pembuatan KTP"
                    classNameSub="-mt-3 md:-mt-4"
                />
            </div>
        </div>
    )
}

export default HeroAntrian
