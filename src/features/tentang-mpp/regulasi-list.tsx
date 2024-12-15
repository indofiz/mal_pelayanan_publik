import { BiDownload } from 'react-icons/bi'

interface IRegulasiList {
    title: string
    link: string
}

export const RegulasiList: React.FC<IRegulasiList> = ({ title, link }) => {
    return (
        <div className="flex items-center md:justify-between gap-2 border-b border-gray-200 py-4">
            <div className="flex-1 text-sm font-semibold text-black_line">
                {title}
            </div>
            <div className="flex-none">
                <a
                    href={link}
                    target="_blank"
                    className="size-12 md:size-auto flex items-center justify-center gap-2 md:py-2 md:px-4 font-semibold  hover:text-white hover:bg-green_primary transition-all duration-150 text-green_primary bg-white border border-green_primary rounded-lg"
                >
                    <BiDownload size={24} />{' '}
                    <span className="hidden md:inline">Download</span>
                </a>
            </div>
        </div>
    )
}
