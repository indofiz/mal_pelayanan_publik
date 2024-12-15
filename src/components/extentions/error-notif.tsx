interface ErrorNotifProps {
    message?: string
    sub_message?: string
}
const ErrorNotif = ({ message, sub_message }: ErrorNotifProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="/empty/empty-box.png" className="w-32" alt="" />
            <div className="text-center">
                <h2 className="font-semibold text-lg text-green_primary">
                    {message ? message : 'Terjadi Kesalahan'}
                </h2>
                <p className="text-gray-400 text-sm mt-1 font-normal">
                    {sub_message
                        ? sub_message
                        : 'Silahkan coba lagi, atau refresh halaman.'}
                </p>
            </div>
        </div>
    )
}

export default ErrorNotif
