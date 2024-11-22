import { Header } from '../features/hero-section/header'
import { Footer } from '../features/footer/footer'
import { FasilitasMPP } from '../features/tentang-mpp/fasilitas'
import { RegulasiMPP } from '../features/tentang-mpp/regulasi'
import HeroTentangSection from '../features/tentang-mpp/hero-tentang-mpp'

export const ProfilePage = () => {
    return (
        <>
            <Header>
                <HeroTentangSection />
            </Header>
            <RegulasiMPP />
            <FasilitasMPP />

            <Footer />
        </>
    )
}
