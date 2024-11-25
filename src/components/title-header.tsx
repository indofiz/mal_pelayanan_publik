const TitleHeader = ({
    title,
    subTitle,
}: {
    title: string
    subTitle?: string
    isHidden?: boolean
}) => {
    return (
        <div className="flex text-black_line flex-col gap-3 mt-12 mx-4 px-2 justify-center items-center mb-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="text-justify text-sm leading-6">{subTitle}</div>
        </div>
    )
}

export default TitleHeader
