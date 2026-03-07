import { FaWhatsapp as Whatsapp, FaInstagram as Instagram } from 'react-icons/fa6'
import { InstagramLink } from './instagram-link'
import { WhatsAppLink } from './whatsapp-link'

export function Footer() {
	return (
		<footer className="flex flex-col items-center py-4">
			<div className="bg-no-repeat bg-cover bg-[url(/footer-bg.png)] w-[90%] text-white text-2xl 2xl:text-5xl font-cinzel py-12 px-8 rounded-4xl leading-snug">
				<span className="block">
					"SORRISOS <span className="font-croissant">sinceros</span>
				</span>
				<span className="block">
					COMEÇAM COM UM CUIDADO <span className="font-croissant">verdadeiro</span>"
				</span>
			</div>

			<div className="w-full flex justify-between px-6 mt-4">
				<div />

				<div className="font-inter text-2xl border-t-3 border-dark-red text-dark-red text-center font-semibold w-[80%] pt-4">
					Camile Rocca - CROSP: 177173 &copy; | Direitos Reservados
				</div>

				<div className="flex items-end">
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
