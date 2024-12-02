import { ModalLayanan } from '@/components/modal/modal-layanan'
import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import { HeroHomepage } from '../features/hero-section/hero-homepage'
import { SearchHomepage } from '../features/hero-section/search-homepage'
import ListInstansiPelayanan from '../features/list-instansi-pelayanan'
import PelayananKami from '../features/pelayanan-kami'

export const Homepage = () => {
    return (
        <>
            <ModalLayanan />
            <Header>
                <HeroHomepage />
            </Header>
            <SearchHomepage />
            <ListInstansiPelayanan />
            <PelayananKami />
            <Footer />
        </>
    )
}
