import { RiMenu3Fill } from 'react-icons/ri'
import logoMPP from '../../assets/image/logo-mpp.png'
import logoTitle from '../../assets/image/logo-title.png'

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3">
        <div className='flex items-center gap-2'>
            <img src={logoMPP} className='w-16' alt="" />
            <img src={logoTitle} className='w-16' alt="" />
        </div>
        <div className='hidden md:flex items-center gap-3'>
            <a href="">Beranda</a>
            <a href="">Profil</a>
            <a href="">Instansi</a>
            <a href="">Petunjuk</a>
        </div>
        <div>
            <button className='bg-white rounded size-12 grid place-content-center text-gray-700 border border-gray-200 shadow-sm'><RiMenu3Fill size={24} strokeWidth={0.5} /></button>
        </div>
    </nav>
  )
}
