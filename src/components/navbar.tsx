import headerLogo from '../images/header-logo.png'
import { NavLink } from './nav-link'

export function Navbar() {
	return (
		<nav className="bg-dark-red opacity-90 flex fixed top-0 w-full z-50">
			<div className="flex items-center">
				<img src={headerLogo} className="w-30 2xl:w-40 h-auto" />
			</div>

			<ul className="uppercase flex gap-12 list-none m-auto font-cinzel">
				<NavLink href="#home">home</NavLink>
				<NavLink href="#about-me">sobre mim</NavLink>
				<NavLink href="#tips">dicas</NavLink>
				<NavLink href="#services">serviços</NavLink>
				<NavLink href="#contact">contato</NavLink>
			</ul>
		</nav>
	)
}
