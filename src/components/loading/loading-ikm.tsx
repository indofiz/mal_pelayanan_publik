const LoadingSKM = () => {
    return (
        <div className="animate-pulse">
            <div className="flex flex-col gap-4">
                <div className="h-5 text-lg bg-slate-200/40 rounded"></div>
                <div className="h-5 text-lg bg-slate-200/40 rounded"></div>
                <div className="size-32 mx-auto my-8 text-lg bg-slate-200/40 rounded"></div>
            </div>
            <div className="mt-6 text-center">
                <div className="h-5 text-lg bg-slate-200/40 rounded"></div>
                <div className="h-5 text-lg bg-slate-200/40 rounded mt-4"></div>
            </div>
        </div>
    )
}

export default LoadingSKM
