import ReactPlayer from 'react-player'
import TitleHeader from '../../components/title-header'

const HeroTentangSection = () => {
    return (
        <div className="pb-12">
            <TitleHeader
                title="Tentang MPP"
                subTitle="Pelayanan Publik adalah rangkaian kegiatan dalam rangka pemenuhan kebutuhan pelayanan sesuai dengan peraturan perundang undangan bagi setiap warga dan penduduk atas barang, jasa, dan/atau pelayanan administratif yang disediakan oleh penyelengara pelayanan publik. Dengan adanya MPP ini, masyarakat dan pelaku usaha diharapkan dapat merasakan manfaat positif karena adanya kemudahan, keterpaduan, kenyamanan dan transparansi dalam penyelengaraan pelayanan publik  kota pangkalpinang."
            />
            <div className="mx-6 overflow-clip rounded-xl aspect-video bg-red-300">
                <ReactPlayer
                    url="/video_test.mp4"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default HeroTentangSection
