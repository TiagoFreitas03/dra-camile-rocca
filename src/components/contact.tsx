import { FaInstagram as Instagram, FaWhatsapp as WhatsApp } from 'react-icons/fa'
import { Section } from './section'
import { CalendarDays } from 'lucide-react'

export function Contact() {
	return (
		<Section backgroundImageClass="bg-[url(/contact-bg.png)]" id="contact">
			<div className="m-auto w-full max-w-400 pt-12">
				<h1 className="font-cinzel-decorative text-7xl text-dark-red uppercase text-center">
					contato
				</h1>

				<div className="border border-dark-red mt-4 rounded-lg flex flex-col shadow-xl bg-white/50">
					<span className="font-inter text-5xl text-dark-red text-center w-full my-12">
						Como podemos te ajudar?
					</span>

					<div className="flex justify-center w-full">
						<div className="px-4 text-center w-[25%] flex flex-col items-center gap-4 py-16">
							<WhatsApp size={78} />

							<span className="font-inter text-3xl text-dark-red font-bold leading-12">
								Converse pelo <br /> WhatsApp
							</span>
						</div>

						<div className="inline-block h-20 w-0.5 bg-black my-auto"></div>

						<div className="px-4 text-center w-[25%] flex flex-col items-center gap-4 py-16">
							<CalendarDays size={78} />

							<span className="font-inter text-3xl text-dark-red font-bold leading-12">
								Agende sua <br /> consulta
							</span>
						</div>

						<div className="inline-block h-20 w-0.5 bg-black my-auto"></div>

						<div className="px-4 text-center w-[25%] flex flex-col items-center gap-8 py-16">
							<Instagram size={78} />
							<span className="font-inter text-3xl text-dark-red font-bold leading-12">
								@dracamilerocca
							</span>
						</div>
					</div>

					<div className="flex justify-center my-12">
						<button className="font-cinzel text-5xl bg-dark-red inline-block px-30 py-8 rounded-2xl text-white cursor-pointer">
							entre em contato
						</button>
					</div>
				</div>
			</div>
		</Section>
	)
}
