const CardPelayanan = () => {
    return (
        <div className="border border-border_card bg-white rounded-2xl p-4 relative z-0 overflow-clip">
            <div className="size-36 bg-gradient-to-br via-green_thin from-green_primary opacity-50 rotate-90 to-white rounded-full absolute -top-12 -right-10 -z-[1]"></div>
            <div className="flex gap-4 items-center">
                <img src="example.png" className="w-12" alt="" />
                <div className="size-8 bg-slate-200/35 rounded-full absolute left-9 top-10 -z-[4]"></div>
                <div className="size-7 bg-slate-200/35 rounded-full absolute left-3 top-4 -z-[4]"></div>
                <div className="font-semibold text-lg leading-6">
                    Dinas Penanaman Modal dan PTSP
                </div>
            </div>
            <div className="text-sm font-light text-text_card mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                condimentum massa purus
            </div>
            <button className="bg-white border border-green_primary rounded-lg flex w-full justify-center py-3 px-4 font-semibold text-green_primary hover:bg-green_primary hover:text-white transition-all duration-100 mt-3">
                Lihat Layanan
            </button>
        </div>
    )
}

export default CardPelayanan
