import { FooterListItem } from './footer-list-item'
import { FaWhatsapp as Whatsapp } from 'react-icons/fa'
import { FaInstagram as Instagram } from 'react-icons/fa'

export function Footer() {
	return (
		<footer className="bg-no-repeat bg-cover bg-[url(/footer-bg.png)] pt-6 pb-2 flex flex-col items-center">
			<h1 className="font-cinzel text-6xl text-white">transforme seu sorriso</h1>

			<div className="inline-block w-150 h-0.5 bg-white mx-auto my-2" />

			<div className="my-2 flex flex-col gap-4">
				<FooterListItem text="Agende uma consulta" />
				<FooterListItem text="Receba uma avaliação" />
				<FooterListItem text="Tenha uma nova experiência" />
			</div>

			<div className="w-full flex justify-end gap-2 px-2">
				<Whatsapp size={40} />
				<Instagram size={40} />
			</div>
		</footer>
	)
}
