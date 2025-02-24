import { Loader } from 'lucide-react'

const LoadingPertanyaan = () => {
    return (
        <div className="border relative border-border_card rounded-xl p-4 text-gray-800">
            <div className="inset-0 flex justify-center gap-2 items-center absolute">
                <Loader className="opacity-30 animate-spin" />
            </div>
            <div className="animate-pulse flex flex-col gap-2">
                <div className="h-5 bg-slate-200/40 rounded w-1/2"></div>
                <div className="h-3 bg-slate-200/40 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200/40 rounded"></div>
            </div>
            <div className="animate-pulse flex flex-col gap-1 mt-3">
                <div className="flex gap-2 items-center">
                    <div className="size-6 rounded-full bg-slate-200/40"></div>
                    <div className="h-3 bg-slate-200/40 rounded w-1/3"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="size-6 rounded-full bg-slate-200/40"></div>
                    <div className="h-3 bg-slate-200/40 rounded w-1/3"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="size-6 rounded-full bg-slate-200/40"></div>
                    <div className="h-3 bg-slate-200/40 rounded w-1/3"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="size-6 rounded-full bg-slate-200/40"></div>
                    <div className="h-3 bg-slate-200/40 rounded w-1/3"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPertanyaan
