import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'
import { Section } from './section'
import { services } from '@/constants/services-data'
import { Card, CardContent } from './ui/card'

export function Services() {
	return (
		<Section backgroundImageClass="bg-[url(/services-bg.png)]" id="services">
			<div className="flex flex-col items-center justify-center w-full h-full pt-24">
				<h1 className="font-cinzel-decorative text-5xl 2xl:text-7xl text-dark-red">serviços</h1>

				<div className="flex-1 mt-2">
					<Carousel opts={{ align: 'start', loop: true }} className="w-[80%] h-[95%] m-auto">
						<CarouselContent className="py-4 2xl:py-12">
							{services.map((service) => (
								<CarouselItem key={service.title} className="basis-1/2">
									<Card className="border border-black max-w-125 h-full m-auto">
										<CardContent className="flex flex-col items-center justify-around 2xl:gap-12 h-full">
											<span className="font-cinzel text-2xl 2xl:text-4xl text-dark-red">
												{service.title}
											</span>

											<img
												src={service.icon}
												alt={service.title}
												className="w-40 2xl:w-45 h-auto"
											/>

											<span className="font-inter 2xl:text-xl font-extralight text-center leading-loose">
												{service.description}
											</span>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="text-dark-red border-dark-red" />
						<CarouselNext className="text-dark-red border-dark-red" />
					</Carousel>
				</div>
			</div>
		</Section>
	)
}
