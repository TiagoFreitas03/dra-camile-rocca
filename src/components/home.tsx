import { ContactButton } from './utils/contact-button'
import { DraCamileRocca } from './utils/dra-camile-rocca'
import { WhatsAppLink } from './utils/whatsapp-link'

export function Home() {
	return (
		<div
			className="sm:aspect-2/1 h-screen sm:h-full overflow-hidden bg-[url(/home-bg-mobile.png)] sm:bg-[url(/home-bg.png)] bg-no-repeat bg-cover sm:bg-contain"
			id="home"
		>
			<div className="w-full h-full flex justify-center items-start sm:items-center sm:justify-end">
				<div className="flex flex-col gap-4 md:gap-12 justify-center items-center sm:w-[60%]">
					<div className="text-center pt-24 sm:pt-0">
						<DraCamileRocca />

						<span className="font-inter text-2xl lg:text-3xl 2xl:text-4xl font-light text-dark-red block mt-2 sm:mt-4">
							Cirurgiã-dentista
						</span>
					</div>

					<WhatsAppLink className="hidden sm:block">
						<ContactButton className="font-cinzel lg:text-xl 2xl:text-2xl py-3 px-6 md:py-4 md:px-10">
							AGENDE SUA CONSULTA
						</ContactButton>
					</WhatsAppLink>
				</div>
			</div>
		</div>
	)
}
