import { ContactButton } from './utils/contact-button'
import { DraCamileRocca } from './utils/dra-camile-rocca'
import { Section } from './utils/section'
import { WhatsAppLink } from './utils/whatsapp-link'

export function Home() {
	return (
		<Section backgroundImageClass="md:bg-[url(/home-bg.png)]" id="home">
			<div className="flex justify-around w-full">
				<span className="hidden md:block" />

				<div className="flex flex-col gap-24 justify-center items-center">
					<div className="text-center">
						<DraCamileRocca />

						<span className="font-inter text-3xl md:text-4xl font-light text-dark-red block mt-4">
							Cirurgiã-dentista
						</span>
					</div>

					<WhatsAppLink className="hidden xl:block">
						<ContactButton className="font-cinzel text-2xl py-4 px-11">
							AGENDE SUA CONSULTA
						</ContactButton>
					</WhatsAppLink>
				</div>
			</div>
		</Section>
	)
}
