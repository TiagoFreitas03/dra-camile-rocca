import { FaInstagram as Instagram, FaWhatsapp as WhatsApp } from 'react-icons/fa6'
import { LuCalendarDays as CalendarDays } from 'react-icons/lu'
import { ContactButton } from './utils/contact-button'
import { InstagramLink } from './utils/instagram-link'
import { Section } from './utils/section'
import { WhatsAppLink } from './utils/whatsapp-link'

export function Contact() {
	return (
		<Section backgroundImageClass="lg:bg-[url(/contact-bg.png)]" id="contact">
			<div className="m-auto w-full lg:max-w-400 pt-18 md:pt-12">
				<h1 className="font-cinzel-decorative text-3xl md:text-5xl 2xl:text-7xl text-dark-red text-center">
					contato
				</h1>

				<div className="lg:border border-dark-red lg:mt-4 lg:mx-12 p-6 lg:p-8 rounded-lg flex flex-col lg:shadow-xl lg:bg-white/50">
					<span className="font-inter text-3xl 2xl:text-5xl text-dark-red text-center w-full 2xl:my-12 leading-relaxed">
						Como podemos te ajudar?
					</span>

					<div className="lg:flex lg:justify-center w-full">
						<WhatsAppLink className="lg:w-[25%]">
							<div className="px-6 lg:text-center flex lg:flex-col items-center gap-4 my-6 lg:m-0 py-8 lg:py-16 bg-light-pink/30 rounded-lg lg:bg-transparent">
								<WhatsApp size={60} />

								<span className="font-inter text-xl 2xl:text-3xl text-dark-red font-bold 2xl:leading-10">
									Converse pelo <br /> WhatsApp
								</span>
							</div>
						</WhatsAppLink>

						<div className="hidden lg:inline-block h-20 w-0.5 bg-black my-auto" />

						<WhatsAppLink className="lg:w-[25%]">
							<div className="px-6 lg:text-center flex lg:flex-col items-center gap-4 my-6 lg:m-0 py-8 lg:py-16 bg-light-pink/30 rounded-lg lg:bg-transparent">
								<CalendarDays size={60} />

								<span className="font-inter text-xl 2xl:text-3xl text-dark-red font-bold 2xl:leading-10">
									Agende a sua <br /> consulta
								</span>
							</div>
						</WhatsAppLink>

						<div className="hidden lg:inline-block h-20 w-0.5 bg-black my-auto" />

						<InstagramLink className="w-[25%]">
							<div className="px-6 lg:text-center flex lg:flex-col items-center gap-4 my-6 lg:m-0 py-8 lg:py-16 bg-light-pink/30 rounded-lg lg:bg-transparent">
								<Instagram size={60} />

								<span className="font-inter text-xl 2xl:text-3xl text-dark-red font-bold 2xl:leading-10">
									Nos visite: <br /> @dra.camilerocca
								</span>
							</div>
						</InstagramLink>
					</div>

					<div className="flex justify-center 2xl:my-12">
						<WhatsAppLink>
							<ContactButton className="font-cinzel text-xl md:text-3xl 2xl:text-5xl px-10 md:px-18 2xl:px-30 py-4 2xl:py-8">
								entre em contato
							</ContactButton>
						</WhatsAppLink>
					</div>
				</div>
			</div>
		</Section>
	)
}
