import { ModalLayanan } from '@/components/modal/modal-layanan'
import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import { HeroHomepage } from '../features/hero-section/hero-homepage'
import { SearchHomepage } from '../features/hero-section/search-homepage'
import ListInstansiPelayanan from '../features/list-instansi-pelayanan'
import PelayananKami from '../features/pelayanan-kami'
import { ModalPencarian } from '@/components/modal/modal-pencarian'
import { ModalLayananDeskripsi } from '@/components/modal/modal-deskripsi'
import GrafikContainer from '@/features/grafik'

export const Homepage = () => {
    return (
        <>
            <ModalPencarian />
            <ModalLayanan />
            <ModalLayananDeskripsi />
            <Header>
                <HeroHomepage />
            </Header>
            <SearchHomepage />
            <ListInstansiPelayanan />
            <PelayananKami />
            <GrafikContainer />
            <Footer />
        </>
    )
}
