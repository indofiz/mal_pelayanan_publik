import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroInstansi from '@/features/instansipage/hero'
import ContainerInstansiPage from '@/features/instansipage/container'
import { ModalLayanan } from '@/components/modal/modal-layanan'
import { ModalLayananDeskripsi } from '@/components/modal/modal-deskripsi'
const InstansiPage = () => {
    return (
        <>
            <ModalLayanan />
            <ModalLayananDeskripsi />
            <Header>
                <div className="lg:max-w-5xl mx-auto md:mb-8 lg:mb-0">
                    <HeroInstansi />
                </div>
            </Header>
            <ContainerInstansiPage />
            <Footer />
        </>
    )
}

export default InstansiPage
