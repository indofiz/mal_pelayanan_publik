import { cn } from '@/utils/utils'

const TitleHeader = ({
    title,
    subTitle,
    isCenter = false,
}: {
    title: string
    subTitle?: string
    isHidden?: boolean
    isCenter?: boolean
}) => {
    return (
        <div
            className={cn(
                'flex lg:flex-1 text-black_line flex-col gap-3 mt-12 mx-4 px-2 justify-center items-center md:items-start mb-8',
                isCenter ? 'md:text-center md:items-center' : ''
            )}
        >
            <h2
                className={cn(
                    'text-2xl font-bold lg:text-4xl lg:mb-4',
                    isCenter ? 'lg:text-center' : 'lg:text-left'
                )}
            >
                {title}
            </h2>
            <div
                className={cn(
                    'text-justify text-sm md:text-lg leading-6 lg:leading-loose',
                    isCenter ? 'lg:text-center' : ' lg:text-left'
                )}
            >
                {subTitle}
            </div>
        </div>
    )
}

export default TitleHeader
