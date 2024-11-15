import { Navbar } from "./navbar"

interface IHeader {
    children?: React.ReactNode
}

export const Header = ({children}:IHeader) => {
  return (
    <header className="bg-gradient-to-b from-grad_top to-grad_bottom">
        <Navbar />
        {children}
    </header>
  )
}
