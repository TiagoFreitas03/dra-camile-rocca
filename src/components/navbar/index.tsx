import { useState } from 'react'
import { FaBars as Bars } from 'react-icons/fa6'

import { NavLink } from './nav-link'
import { MobileMenu } from './mobile-menu'
import { menuLinks } from '@/constants/menu-links'
import headerLogo from '@/images/header-logo.png'

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function handleToggleMenu() {
		setIsMenuOpen((state) => !state)
	}

	return (
		<>
			<nav className="bg-dark-red opacity-90 flex justify-between md:justify-normal fixed top-0 w-full z-50">
				<div className="flex items-center">
					<img src={headerLogo} className="w-30 xl:w-40 h-auto" />
				</div>

				<div className="md:hidden">
					<button
						type="button"
						className="mr-4 mt-3.5 cursor-pointer outline-0"
						onClick={handleToggleMenu}
					>
						<Bars color="white" size={24} />
					</button>
				</div>

				<ul className="hidden md:flex gap-12 list-none m-auto font-cinzel">
					{menuLinks.map((menuLink) => {
						return (
							<NavLink key={menuLink.href} href={menuLink.href}>
								{menuLink.text}
							</NavLink>
						)
					})}
				</ul>
			</nav>

			{isMenuOpen && <MobileMenu onLinkClick={() => setIsMenuOpen(false)} />}
		</>
	)
}
