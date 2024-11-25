import { RiMenu3Fill } from 'react-icons/ri'
import logoMPP from '../../assets/image/logo-mpp.png'
import logoTitle from '../../assets/image/logo-title.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center px-4 py-3 md:py-8">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoMPP} className="w-16 md:w-24" alt="" />
                    <img src={logoTitle} className="w-16 md:w-24" alt="" />
                </Link>
                <div className="hidden md:flex items-center gap-3 md:gap-6 lg:gap-10 md:font-semibold">
                    <a href="">Beranda</a>
                    <a href="">Profil</a>
                    <a href="">Instansi</a>
                    <a href="">Petunjuk</a>
                </div>
                <div className="md:hidden">
                    <button className="bg-white rounded size-12 grid place-content-center text-gray-700 border border-gray-200 shadow-sm">
                        <RiMenu3Fill size={24} strokeWidth={0.5} />
                    </button>
                </div>
            </nav>
        </div>
    )
}
