import { Section } from './section'
import { Bold } from './bold'
import textDecoration from '../images/text-decoration.png'
import draCamile from '../images/dra-camile.png'
import { MyName } from './my-name'

export function AboutMe() {
	return (
		<Section backgroundImageClass="bg-[url(/about-me-bg.png)]" id="about-me">
			<div className="flex px-20">
				<div className="w-[65%] flex items-center">
					<div className="flex flex-col gap-4">
						<span className="text-center">
							<MyName />
						</span>

						<img src={textDecoration} className="w-72 m-auto" />

						<div className="2xl:text-2xl font-inter flex flex-col gap-12 leading-loose">
							<p>
								A <Bold>Dra. Camile Rocca</Bold> é cirurgiã-dentista formada em Odontologia pelo
								Centro Universitário Braz Cubas, com sólida atuação em clínica geral e{' '}
								<Bold>foco</Bold> em um{' '}
								<Bold> atendimento humanizado, ético e individualizado</Bold>.
							</p>

							<p>
								Durante sua formação acadêmica, adquiriu experiência clínica por meio de estágio
								supervisionado, atuando no atendimento de pacientes adultos e pediátricos, sempre
								prezando pela <Bold>saúde bucal</Bold> e <Bold> bem-estar do paciente</Bold>.
							</p>

							<p>
								Sua prática é pautada na <Bold>atualização constante</Bold> e no{' '}
								<Bold> cuidado</Bold> às necessidades de cada <Bold> sorriso</Bold>.
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center w-[35%]">
					<img src={draCamile} className="w-[70%] 2xl:w-[80%] h-auto" />
				</div>
			</div>
		</Section>
	)
}
