import { FaInstagram as Instagram, FaWhatsapp as WhatsApp } from 'react-icons/fa6'

import { InstagramLink } from '@/components/utils/instagram-link'
import { WhatsAppLink } from '@/components/utils/whatsapp-link'
import { menuLinks } from '@/constants/menu-links'

interface MobileMenuProps {
	onLinkClick: () => void
}

export function MobileMenu({ onLinkClick }: MobileMenuProps) {
	return (
		<div className="md:hidden fixed right-0 top-14 py-6 shadow-2xl w-[90%] px-8 z-50 bg-white">
			<span className="font-cinzel text-3xl text-center text-dark-red border-b-2 border-dark-red pb-3 block">
				Menu
			</span>

			<ul className="mt-4 font-inter text-dark-red text-xl">
				{menuLinks.map((menuLink) => {
					if (menuLink.visibleInMobile !== false) {
						return (
							<li key={menuLink.href} onClick={onLinkClick}>
								<a className="block py-4" href={menuLink.href}>
									{menuLink.text}
								</a>
							</li>
						)
					}
				})}
			</ul>

			<div className="flex gap-3 mt-4">
				<InstagramLink>
					<Instagram size={24} className="" />
				</InstagramLink>

				<WhatsAppLink>
					<WhatsApp size={24} />
				</WhatsAppLink>
			</div>
		</div>
	)
}
