import { FaRegAddressBook } from 'react-icons/fa'
import { RiSurveyLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const HeroHomepage = () => {
    return (
        <div className="pt-6 pb-0">
            <div className="mb-8 px-6">
                <h2 className="text-center font-bold text-2xl text-black_line mb-3 leading-8">
                    Selamat Datang di Mal Pelayanan Publik (MPP) Kota
                    Pangkalpinang
                </h2>
                <h3 className="text-center font-semibold text-sm text-black_line mb-4">
                    Buka Senin - Jumat Dari Jam 08:00 Sampai 16:00
                </h3>
            </div>
            <div className="flex gap-2 flex-col md:flex-row px-6 mb-8">
                <Link
                    className="h-14 flex gap-3 justify-center items-center rounded-md font-medium text-white bg-green_primary px-8 "
                    to={''}
                >
                    <FaRegAddressBook size={24} strokeWidth={0.1} />
                    Ambil Antrian
                </Link>
                <Link
                    className="h-14 flex gap-3 justify-center items-center rounded-md font-medium text-black_line bg-yellow_primary px-8 "
                    to={''}
                >
                    <RiSurveyLine size={24} strokeWidth={0.1} />
                    Isi Survey
                </Link>
            </div>
            <div className="w-full bg-hero-img bg-left-bottom bg-no-repeat h-32 bg-cover"></div>
        </div>
    )
}
