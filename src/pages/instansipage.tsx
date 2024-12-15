import { Footer } from '../features/footer/footer'
import { Header } from '../features/hero-section/header'
import HeroInstansi from '@/features/instansipage/hero'
import ContainerInstansiPage from '@/features/instansipage/container'
import { ModalLayanan } from '@/components/modal/modal-layanan'
export const InstansiPage = () => {
    return (
        <>
            <ModalLayanan />
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
