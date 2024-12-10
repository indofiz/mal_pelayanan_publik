import logo from '../../assets/image/logo-mpp-lg.png'

export const LogoFooter = () => {
    return (
        <div className="flex items-center justify-center lg:items-start gap-2 flex-col px-4 lg:flex lg:max-w-lg">
            <div className="lg:flex lg:flex-row gap-2 lg:items-left text-center lg:text-left">
                <div className="text-center lg:text-left flex justify-center items-center lg:justify-start">
                    <img src={logo} className="w-28" alt="" />
                </div>
                <div className="flex justify-center flex-col text-center">
                    <div className="text-2xl font-bold lg:max-w-[1ch]">
                        MAL PELAYANAN PUBLIK
                    </div>
                    <div className="text-base font-bold text-yellow_primary">
                        MELAYANI PANGKALPINANG PRIMA
                    </div>
                </div>
            </div>
            <div className="text-center mt-1 text-sm font-light lg:text-left">
                Mal Pelayanan Publik Kota Pangkalpinang menyediakan layanan
                pengintegrasian pelayanan publik secara terpadu pada suatu
                tempat sebagai upaya meningkatkan kecepatan, kemudahan,
                jangkauan kenyamanan dan keamanan.
            </div>
        </div>
    )
}
