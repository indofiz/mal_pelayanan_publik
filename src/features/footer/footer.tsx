import { LogoFooter } from './logo'
import MapKontak from './map-kontak'
import MenuFooter from './menu-footer'
import { PetaFooter } from './peta'

export const Footer = () => {
    return (
        <>
            <div className="mt-12 text-black_line -mb-40 pb-8 mx-4 bg-gradient-to-b overflow-clip before:content-[''] before:absolute before:-z-10 before:bg-auto before:inset-0 before:bg-gradient-fot before:bg-right-bottom before:bg-no-repeat from-grad_sec_top to-grad_sec_bot relative z-20 p-4 rounded-3xl">
                <PetaFooter />
                <MapKontak />
            </div>
            <footer className="bg-black_line text-white pt-52">
                <LogoFooter />
                <MenuFooter />
                <h6 className="bg-black_2 text-center py-4 mt-12">
                    Copyright &copy; Pangkalpinang {new Date().getFullYear()}
                    <br /> Pangkalpinang, Pangkal Kemenangan
                </h6>
            </footer>
        </>
    )
}
