import { FaRegAddressBook } from 'react-icons/fa'
import { RiSurveyLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const HeroHomepage = () => {
    return (
        <div className="container mx-auto pt-6 pb-0 md:pb-20">
            <div className="mb-8 px-6 md:max-w-5xl md:mx-auto md:mt-16">
                <h2 className="text-center font-bold text-2xl md:text-5xl lg:text-6xl md:px-12 text-black_line mb-3 leading-8 md:leading-tight lg:leading-snug">
                    Selamat Datang di <br /> Mal Pelayanan Publik (MPP) <br />{' '}
                    Kota Pangkal Pinang
                </h2>
                <h3 className="text-center font-semibold text-sm md:text-xl md:font-semibold text-black_line mb-4 md:mt-6">
                    Jam pelayanan Senin - Kamis : <strong>08:00</strong> -{' '}
                    <strong>15:00</strong>, Jum’at : <strong>08:00</strong> -{' '}
                    <strong>15:30</strong>, Sabtu - Minggu :{' '}
                    <strong>Libur</strong>
                </h3>
            </div>
            <div className="flex gap-2 flex-col md:flex-row px-6 mb-8 md:max-w-5xl md:mx-auto md:justify-center md:mb-28">
                <Link
                    className="h-14 flex gap-3 justify-center items-center hover:bg-black_line hover:text-white transition-all duration-200 rounded-md font-medium text-white bg-green_primary px-8 "
                    to={'/antrian'}
                >
                    <FaRegAddressBook size={24} strokeWidth={0.1} />
                    Daftar Online
                </Link>
                <Link
                    className="h-14 flex gap-3 justify-center items-center hover:bg-black_line hover:text-white transition-all duration-200 rounded-md font-medium text-black_line bg-yellow_primary px-8 "
                    to={'/survey'}
                >
                    <RiSurveyLine size={24} strokeWidth={0.1} />
                    Isi Survey
                </Link>
            </div>
            <div className="w-full bg-hero-img bg-left-bottom bg-no-repeat h-32 md:h-44 lg:h-64 lg:px-4 lg:bg-center bg-cover md:bg-contain"></div>
        </div>
    )
}
