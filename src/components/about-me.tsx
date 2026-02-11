import { Section } from './section'
import draCamile from '../images/dra-camile.png'
import { MyName } from './my-name'

export function AboutMe() {
	return (
		<Section backgroundImageUrl="/about-me-bg.png" id="about-me">
			<div className="flex justify-around gap-20">
				<div className="flex flex-col max-w-[45%]">
					<span className="text-center mb-24">
						<MyName />
					</span>

					<div className="text-2xl font-inter flex flex-col gap-12 leading-12">
						<p>
							A <span className="font-bold">Dra. Camile Rocca</span> é cirurgiã-dentista formada em
							Odontologia pelo Centro Universitário Braz Cubas, com sólida atuação em clínica geral
							e <span className="font-bold">foco</span> em um
							<span className="font-bold"> atendimento humanizado, ético e individualizado</span>.
						</p>

						<p>
							Durante sua formação acadêmica, adquiriu experiência clínica por meio de estágio
							supervisionado, atuando no atendimento de pacientes adultos e pediátricos, sempre
							prezando pela <span className="font-bold">saúde bucal</span> e
							<span className="font-bold"> bem-estar do paciente</span>.
						</p>

						<p>
							Sua prática é pautada na <span className="font-bold">atualização constante</span> e no
							<span className="font-bold"> cuidado</span> às necessidades de cada
							<span className="font-bold"> sorriso</span>.
						</p>
					</div>
				</div>

				<img src={draCamile} className="max-w-120 h-169" />
			</div>
		</Section>
	)
}
