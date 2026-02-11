import type { ReactNode } from 'react'

import brushing from '../images/brushing.png'
import floss from '../images/floss.png'
import appointments from '../images/appointments.png'
import tongue from '../images/tongue.png'
import toothbrush from '../images/toothbrush.png'
import toothpaste from '../images/toothpaste.png'

interface Tip {
	title: string
	image: string
	description: ReactNode
}

export const tips: Tip[] = [
	{
		title: 'escovação',
		image: brushing,
		description: (
			<span>
				Use escovas de cerdas macias, com movimentos curtos e suaves, inclinando a escova a 45 graus
				em relação à gengiva.{' '}
				<span className="font-bold">
					Utilize escovas de cabeça pequena com cerdas macias e retas.
				</span>
			</span>
		),
	},
	{
		title: 'use fio dental',
		image: floss,
		description: (
			<span>
				Deve ser usado pelo menos <span className="font-bold">uma vez ao dia</span>, idealmente
				antes da escovação noturna, para remover restos de comida entre os dentes que a escova{' '}
				<span className="font-bold">h</span> alcança.
			</span>
		),
	},
	{
		title: 'consultas',
		image: appointments,
		description: (
			<span>
				Faça um acompanhamento regular com um <span className="font-bold">profissional</span> e
				receba os <span className="font-bold">cuidados ideais</span> para sua saúde bucal.
			</span>
		),
	},
	{
		title: 'escove a língua',
		image: tongue,
		description: (
			<span>
				A <span className="font-bold">saburra lingual</span> é uma das principais causas do mau
				hálito e deve ser <span className="font-bold">removida</span> com a escova ou um raspador de
				língua.
			</span>
		),
	},
	{
		title: 'escova',
		image: toothbrush,
		description: (
			<span>
				<span className="font-bold">Substitua</span> a escova a{' '}
				<span className="font-bold">cada 3 meses</span>, ou antes, se as cerdas estiverem deformadas
				ou após um resfriado/infecção.
			</span>
		),
	},
	{
		title: 'creme dental',
		image: toothpaste,
		description: (
			<span>
				Use cremes dentais que contenham <span className="font-bold">flúor</span> para{' '}
				<span className="font-bold">fortalecer</span> o esmalte dos dentes e{' '}
				<span className="font-bold">prevenir</span> cáries.
			</span>
		),
	},
]
