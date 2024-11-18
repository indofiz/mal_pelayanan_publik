import logo from '../../assets/image/logo-mpp-lg.png'

export const LogoFooter = () => {
    return (
        <div className="flex items-center justify-center gap-2 flex-col px-4">
            <img src={logo} className="w-28" alt="" />
            <div className="flex justify-center flex-col text-center">
                <div className="text-2xl font-bold">MAL PELAYANAN PUBLIK</div>
                <div className="text-base font-bold text-yellow_primary">
                    MELAYANI PANGKALPINANG PRIMA
                </div>
            </div>
            <div className="text-center mt-1 text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus nisi non sapien vehicula, dapibus suscipit augue
                bibendum. Pellentesque sit amet ornare eros. Sed non velit eros.
            </div>
        </div>
    )
}
