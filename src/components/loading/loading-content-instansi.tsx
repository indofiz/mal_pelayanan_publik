import { ScrollArea } from '../ui/scroll-area'

const LoadingContentInstansi = () => {
    return (
        <ScrollArea className="px-4 h-[500px] px md:h-auto md:max-h-[calc(100vh-100px)]">
            <div className="animate-pulse flex flex-row justify-start items-center md:flex-row gap-7 md:px-0 mt-8 md:mt-0">
                <div className="w-auto md:w-auto">
                    <div className="w-16 md:w-20 h-24 bg-slate-200/40 rounded "></div>
                </div>
                <div className="w-full md:max-w-md flex flex-1 flex-col gap-2">
                    <div className="h-5 bg-slate-200/40 rounded w-3/4"></div>
                    <div className="h-5 bg-slate-200/40 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-200/40 rounded w-3/4"></div>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold text-xl mb-3">Informasi</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3 animate-pulse">
                    <div className="h-20 bg-slate-200/40 rounded"></div>
                    <div className="h-20 bg-slate-200/40 rounded"></div>
                    <div className="h-20 bg-slate-200/40 rounded"></div>
                    <div className="h-20 bg-slate-200/40 rounded"></div>
                </div>
            </div>
            <div className="mt-12 md:mt-8">
                <h3 className="font-semibold text-xl mb-3 md:mb-6">
                    Daftar Layanan
                </h3>

                <div className="animate-pulse">
                    <div className="flex gap-3 flex-col">
                        <LayananLoadingPulse />
                        <LayananLoadingPulse />
                        <LayananLoadingPulse />
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default LoadingContentInstansi

const LayananLoadingPulse = () => {
    return (
        <div className="border-b border-border py-4 flex flex-col md:flex-row gap-3 md:gap-2 justify-between  md:items-center">
            <div className=" flex-1">
                <div className="h-8 bg-slate-200/40 rounded w-1/2"></div>
            </div>
            <div className="flex gap-2 md:gap-4 w-1/4 justify-end">
                <div className="h-8 bg-slate-200/40 rounded w-1/2"></div>
                <div className="h-8 bg-slate-200/40 rounded w-1/2"></div>
            </div>
        </div>
    )
}
