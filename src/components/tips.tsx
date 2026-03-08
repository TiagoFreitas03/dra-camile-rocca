import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import { Section } from './utils/section'
import { tips } from '@/constants/tips-data'

export function Tips() {
	return (
		<Section backgroundImageClass="md:bg-[url(/tips-bg.png)]" id="tips">
			<div className="flex flex-col items-center justify-center w-full h-full py-20 2xl:py-30 bg-light-pink/50 md:bg-transparent">
				<h1 className="font-cinzel-decorative text-3xl md:text-5xl 2xl:text-7xl text-dark-red">
					dicas
				</h1>

				<Carousel opts={{ align: 'start', loop: true }} className="w-[90%] md:w-[80%] m-auto">
					<CarouselContent className="py-4 2xl:py-12">
						{tips.map((tip) => (
							<CarouselItem key={tip.title} className="md:basis-1/2 lg:basis-1/3">
								<Card className="bg-white/50 shadow md:shadow-xl transform transition duration-300 md:hover:-translate-y-4 h-full">
									<CardContent className="flex flex-col gap-4 items-center justify-center md:aspect-square h-full my-2">
										<span className="font-cinzel text-3xl 2xl:text-5xl text-dark-red">
											{tip.title}
										</span>

										<img src={tip.image} alt={tip.title} className="w-32 2xl:w-56 h-auto" />

										<span className="font-inter 2xl:text-xl font-extralight text-center leading-loose">
											{tip.description}
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
