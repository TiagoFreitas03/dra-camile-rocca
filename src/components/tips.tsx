import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import { Section } from './section'
import { tips } from '../constants/tips-data'

export function Tips() {
	return (
		<Section backgroundImageClass="bg-[url(/tips-bg.png)]" id="tips">
			<div className="flex flex-col items-center justify-center w-full h-full pt-30">
				<h1 className="font-cinzel-decorative text-7xl text-dark-red">dicas</h1>

				<div className="flex-1">
					<Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-360 h-[95%]">
						<CarouselContent className="py-12 px-1">
							{tips.map((tip) => (
								<CarouselItem key={tip.title} className="basis-1/2 lg:basis-1/3">
									<Card className="bg-white/50 shadow-xl">
										<CardContent className="flex flex-col gap-4 items-center justify-center aspect-square h-full my-12">
											<span className="font-cinzel text-5xl text-dark-red">{tip.title}</span>

											<img src={tip.image} alt={tip.title} className="w-56 h-auto" />

											<span className="font-inter text-xl font-extralight text-center leading-loose">
												{tip.description}
											</span>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</Section>
	)
}
