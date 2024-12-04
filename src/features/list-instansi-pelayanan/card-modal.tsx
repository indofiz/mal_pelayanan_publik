interface ICardModal {
    jumlah: string
    desc: string
    img: string
}

export const CardModal: React.FC<ICardModal> = ({ jumlah, desc, img }) => {
    return (
        <div className="flex-1 border border-border_card bg-white rounded-2xl p-4 py-2 md:py-4 relative z-0 overflow-clip flex items-center gap-4">
            <div className="size-36 bg-gradient-to-br via-green_thin from-green_primary opacity-50 rotate-90 to-white rounded-full absolute -top-12 -right-10 -z-[1]"></div>
            <div className="size-10 md:size-14">
                <img src={img} className="w-12" alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl md:text-3xl">{jumlah}</h3>
                <div className="text-xs">{desc}</div>
            </div>
        </div>
    )
}
