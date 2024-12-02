import { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import logoMPP from '../../assets/image/logo-mpp.png'
import logoTitle from '../../assets/image/logo-title.png'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/utils'
import { X } from 'lucide-react'

export const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <div className="container mx-auto">
            <nav className="flex justify-between items-center px-4 py-3 md:py-8">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoMPP} className="w-16 md:w-24" alt="" />
                    <img src={logoTitle} className="w-16 md:w-24" alt="" />
                </Link>

                <div
                    className={cn(
                        'flex items-center gap-3 md:gap-6 lg:gap-10 md:font-semibold transition-all duration-500 md:static md:mt-0 text-black_line',
                        menu
                            ? 'fixed bg-white md:bg-transparent inset-0 md:inset-none flex-col md:flex-row gap-8 justify-center items-center z-50 opacity-100 mt-0'
                            : 'absolute left-0 right-0 top-0 flex-col md:flex-row gap-8 justify-center items-center bg-white md:bg-transparent z-50 -mt-96 md:mt-0 opacity-0 md:opacity-100'
                    )}
                >
                    <Link
                        to="/"
                        className="font-semibold hover:text-green_primary transition-all duration-200 text-xl md:text-base"
                    >
                        Beranda
                    </Link>
                    <Link
                        to="/profil"
                        className="font-semibold hover:text-green_primary transition-all duration-200 text-xl md:text-base"
                    >
                        Profil
                    </Link>
                    <Link
                        to="/instansi"
                        className="font-semibold hover:text-green_primary transition-all duration-200 text-xl md:text-base"
                    >
                        Instansi
                    </Link>
                    <Link
                        to="/petunjuk"
                        className="font-semibold hover:text-green_primary transition-all duration-200 text-xl md:text-base"
                    >
                        Petunjuk
                    </Link>
                </div>

                <div className="md:hidden relative z-[100]">
                    <button
                        onClick={() => setMenu((prev) => !prev)}
                        className={cn(
                            'bg-white rounded size-12 grid place-content-center text-gray-700 border border-gray-200 shadow-sm',
                            menu ? 'fixed top-4 right-4' : 'static'
                        )}
                    >
                        {menu ? (
                            <X size={24} strokeWidth={0.5} />
                        ) : (
                            <RiMenu3Fill size={24} strokeWidth={0.5} />
                        )}
                    </button>
                </div>
            </nav>
        </div>
    )
}
