import { HoverBackgroundEffect } from './hover-background-effect'
import { MyName } from './my-name'
import { Section } from './section'
import { WhatsAppLink } from './whatsapp-link'

export function Home() {
	return (
		<Section backgroundImageClass="bg-[url(/home-bg.png)]" id="home">
			<div className="flex justify-around w-full transition-opacity duration-500 opacity-100">
				<span></span>

				<div className="flex flex-col gap-24 justify-center items-center">
					<div className="text-center">
						<MyName />

						<span className="font-inter text-4xl font-light text-dark-red block mt-4">
							Cirurgiã-dentista
						</span>
					</div>

					<WhatsAppLink>
						<HoverBackgroundEffect className="font-cinzel text-2xl py-4 px-11">
							AGENDE SUA CONSULTA
						</HoverBackgroundEffect>
					</WhatsAppLink>
				</div>
			</div>
		</Section>
	)
}
