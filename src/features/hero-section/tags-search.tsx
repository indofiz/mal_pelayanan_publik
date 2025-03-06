const TagsSearch = ({
    tags,
    onClick,
}: {
    tags: string
    onClick: (value: string) => void
}) => {
    return (
        <button
            onClick={() => onClick(tags)}
            className="bg-gray-400/20 text-xs md:text-sm hover:bg-yellow_primary hover:text-black_line cursor-pointer transition-all duration-300 px-4 py-2 rounded-md text-gray-800"
        >
            {tags}
        </button>
    )
}

export default TagsSearch
