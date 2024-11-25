interface ICardPelayanan {
    title: string
    desc: string
    img: string
}

export const CardPelayananKami: React.FC<ICardPelayanan> = ({
    title,
    desc,
    img,
}) => {
    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center gap-4">
                <img src={img} className="w-12" alt="" />
                <div className="font-semibold text-xl">{title}</div>
            </div>
            <div className="font-light text-text_card text-sm leading-5 mt-2">
                {desc}
            </div>
        </div>
    )
}
