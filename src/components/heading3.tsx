import { cn } from '../utils/utils'

export const Heading3 = ({
    title,
    className,
}: {
    title: string
    className?: string
}) => {
    return (
        <h3
            className={cn(
                'text-center font-semibold text-2xl md:text-4xl md:text-left mb-6',
                className
            )}
        >
            {title}
        </h3>
    )
}
