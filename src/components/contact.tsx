import { FaInstagram as Instagram, FaWhatsapp as WhatsApp } from 'react-icons/fa'
import { Section } from './section'
import { CalendarDays } from 'lucide-react'
import { InstagramLink } from './instagram-link'

export function Contact() {
	return (
		<Section backgroundImageClass="bg-[url(/contact-bg.png)]" id="contact">
			<div className="m-auto w-full max-w-400 pt-12">
				<h1 className="font-cinzel-decorative text-5xl 2xl:text-7xl text-dark-red text-center">
					contato
				</h1>

				<div className="border border-dark-red mt-4 mx-12 p-8 rounded-lg flex flex-col shadow-xl bg-white/50">
					<span className="font-inter text-3xl 2xl:text-5xl text-dark-red text-center w-full 2xl:my-12">
						Como podemos te ajudar?
					</span>

					<div className="flex justify-center w-full">
						<div className="px-4 text-center w-[25%] flex flex-col items-center gap-4 py-16">
							<WhatsApp size={60} />

							<span className="font-inter text-3xl text-dark-red font-bold leading-10">
								Converse pelo <br /> WhatsApp
							</span>
						</div>

						<div className="inline-block h-20 w-0.5 bg-black my-auto"></div>

						<div className="px-4 text-center w-[25%] flex flex-col items-center gap-4 py-16">
							<CalendarDays size={60} />

							<span className="font-inter text-3xl text-dark-red font-bold leading-10">
								Agende sua <br /> consulta
							</span>
						</div>

						<div className="inline-block h-20 w-0.5 bg-black my-auto"></div>

						<InstagramLink className="w-[25%]">
							<div className="px-4 text-center  flex flex-col items-center gap-8 py-16">
								<Instagram size={60} />
								<span className="font-inter text-3xl text-dark-red font-bold leading-10">
									@dra.camilerocca
								</span>
							</div>
						</InstagramLink>
					</div>

					<div className="flex justify-center 2xl:my-12">
						<button className="font-cinzel text-3xl 2xl:text-5xl bg-dark-red inline-block px-18 2xl:px-30 py-4 2xl:py-8 rounded-2xl text-white cursor-pointer">
							entre em contato
						</button>
					</div>
				</div>
			</div>
		</Section>
	)
}
