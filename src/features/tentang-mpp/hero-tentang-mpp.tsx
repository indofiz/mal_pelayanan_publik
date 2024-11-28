import ReactPlayer from 'react-player'
import TitleHeader from '../../components/title-header'
// import { useState } from 'react'

const HeroTentangSection = () => {
    return (
        <div className="container mx-auto lg:pb-44 md:px-4 lg:px-0">
            <div className="pb-12 lg:flex lg:gap-16 lg:mt-12">
                <TitleHeader
                    title="Tentang MPP"
                    subTitle="Pelayanan Publik adalah rangkaian kegiatan dalam rangka pemenuhan kebutuhan pelayanan sesuai dengan peraturan perundang undangan bagi setiap warga dan penduduk atas barang, jasa, dan/atau pelayanan administratif yang disediakan oleh penyelengara pelayanan publik. Dengan adanya MPP ini, masyarakat dan pelaku usaha diharapkan dapat merasakan manfaat positif karena adanya kemudahan, keterpaduan, kenyamanan dan transparansi dalam penyelengaraan pelayanan publik  kota pangkalpinang."
                />
                <div className="mx-6 lg:flex-1 lg:h-full overflow-clip rounded-xl aspect-video">
                    <ReactPlayer
                        url="/video_test.mp4"
                        controls
                        muted
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroTentangSection
