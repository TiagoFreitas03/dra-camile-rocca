import headerLogo from '../images/header-logo.png'
import { NavLink } from './nav-link'

export function Navbar() {
	return (
		<nav className="bg-dark-red opacity-90 flex fixed top-0 w-full">
			<img src={headerLogo} className="w-40" />

			<ul className="uppercase flex gap-12 list-none m-auto text-xl font-cinzel">
				<NavLink>home</NavLink>
				<NavLink>sobre mim</NavLink>
				<NavLink>dicas</NavLink>
				<NavLink>serviço</NavLink>
				<NavLink>contato</NavLink>
				<NavLink>endereço</NavLink>
			</ul>
		</nav>
	)
}
