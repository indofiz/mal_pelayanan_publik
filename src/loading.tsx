import { Loader2 } from 'lucide-react'
import logo from './assets/image/logo-mpp-lg.png'

export default function LoadingPage() {
    return (
        <div>
            <div className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <img
                            src={logo}
                            className="h-28"
                            alt="logo Kerjasama Media Media Online"
                        />
                    </div>
                    <div className="w-24 mx-auto mt-4 text-center flex justify-center items-center">
                        <Loader2 className="size-12 text-primary animate-spin" />
                    </div>
                </div>
            </div>
        </div>
    )
}
