import { FaWhatsapp as Whatsapp, FaInstagram as Instagram } from 'react-icons/fa6'
import { InstagramLink } from './utils/instagram-link'
import { WhatsAppLink } from './utils/whatsapp-link'

export function Footer() {
	return (
		<footer className="flex flex-col items-center py-4">
			<div className="bg-no-repeat bg-cover bg-[url(/footer-bg.png)] w-full md:w-[90%] text-white md:text-2xl 2xl:text-5xl font-cinzel py-6 md:py-12 px-2 md:px-8 md:rounded-4xl">
				<span className="block">
					"SORRISOS <span className="font-croissant">sinceros</span>
				</span>
				<span className="block">
					COMEÇAM COM UM CUIDADO <span className="font-croissant">verdadeiro</span>"
				</span>
			</div>

			<div className="w-full flex justify-center lg:justify-between px-6 mt-4">
				<div className="hidden md:block md:w-[6%]" />

				<div className="font-inter text-2xl lg:border-t-3 border-dark-red text-dark-red text-center font-semibold w-[80%] pt-4">
					Dra. Camile Rocca <span className="hidden lg:inline">-</span>
					<br className="lg:hidden" /> CROSP: 177173 &copy;{' '}
					<span className="hidden lg:inline">| Direitos Reservados</span>
				</div>

				<div className="hidden lg:flex items-end">
					<InstagramLink>
						<Instagram size={40} color="black" />
					</InstagramLink>

					<WhatsAppLink>
						<Whatsapp size={40} color="black" />
					</WhatsAppLink>
				</div>
			</div>
		</footer>
	)
}
