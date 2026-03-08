import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { Section } from './utils/section'
import { services } from '@/constants/services-data'

export function Services() {
	return (
		<Section backgroundImageClass="md:bg-[url(/services-bg.png)]" id="services">
			<div className="flex flex-col items-center justify-center w-full h-full pt-21 2xl:py-30 ">
				<h1 className="font-cinzel-decorative text-3xl md:text-5xl 2xl:text-7xl text-dark-red">
					serviços
				</h1>

				<Carousel opts={{ align: 'start', loop: true }} className="w-[90%] md:w-[80%] m-auto">
					<CarouselContent className="py-4 2xl:py-12">
						{services.map((service) => (
							<CarouselItem key={service.title} className="md:basis-1/2">
								<Card className="border border-black max-w-125 h-full m-auto">
									<CardContent className="flex flex-col items-center justify-around 2xl:gap-12 h-full">
										<span className="font-cinzel text-2xl 2xl:text-4xl text-dark-red">
											{service.title}
										</span>

										<img src={service.icon} alt={service.title} className="w-40 2xl:w-45 h-auto" />

										<span className="font-inter 2xl:text-xl font-extralight text-center leading-loose">
											{service.description}
										</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className="hidden md:flex text-dark-red border-dark-red" />

					<CarouselNext className="hidden md:flex text-dark-red border-dark-red" />
				</Carousel>
			</div>
		</Section>
	)
}
