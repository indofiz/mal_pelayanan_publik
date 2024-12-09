import { Outlet } from 'react-router-dom'
import ScrollToTop from './scroll-top'

const RootPage = () => {
    return (
        <>
            <ScrollToTop />

            <Outlet />
        </>
    )
}

export default RootPage
