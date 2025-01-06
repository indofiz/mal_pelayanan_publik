import TitleHeader from '../../components/title-header'

const HeroSurvey = () => {
    return (
        <div className="container mx-auto lg:pb-12 md:px-4 lg:px-0">
            <div className="pb-12  lg:text-center lg:mt-12">
                <TitleHeader
                    isLarge
                    isCenter
                    title="Survey Kepuasan Masyarakat"
                    subTitle="Survey Kepuasan Masyarakat (SKM) bertujuan untuk mengukur tingkat kepuasan masyarakat sebagai pengguna layanan dan meningkatkan kualitas penyelengaraan pelayanan publik. Survey Kepuasan Masyarakat dilaksanakan sesuai dengan ketentuan dan Permenpan RB Nomor 14 tahun 2017 tentang Pedoman Penyusunan Survey Kepuasan Masyarakat."
                />
            </div>
        </div>
    )
}

export default HeroSurvey
