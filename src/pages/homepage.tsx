import { Header } from '../features/hero-section/header'
import { HeroHomepage } from '../features/hero-section/hero-homepage'
import { SearchHomepage } from '../features/hero-section/search-homepage'

export const Homepage = () => {
    return (
        <>
            <Header>
                <HeroHomepage />
            </Header>
            <SearchHomepage />
        </>
    )
}
