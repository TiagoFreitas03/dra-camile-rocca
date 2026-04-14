import type { ReactNode } from 'react'

import { Bold } from '@/components/utils/bold'
import brushing from '@/images/brushing.png'
import floss from '@/images/floss.png'
import appointments from '@/images/appointments.png'
import tongue from '@/images/tongue.png'
import toothbrush from '@/images/toothbrush.png'
import toothpaste from '@/images/toothpaste.png'

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
				Escove os dentes com movimentos <Bold>curtos</Bold> e <Bold>suaves</Bold>, inclinando a
				escova a 45 graus em relação à gengiva.
			</span>
		),
	},
	{
		title: 'use fio dental',
		image: floss,
		description: (
			<span>
				Deve ser usado pelo menos <Bold>uma vez ao dia</Bold>, idealmente antes da escovação
				noturna, para remover restos de comida entre os dentes em que a escova não alcança.
			</span>
		),
	},
	{
		title: 'consultas',
		image: appointments,
		description: (
			<span>
				Faça um acompanhamento regular com um <Bold>profissional</Bold> e receba os{' '}
				<Bold>cuidados ideais</Bold> para sua saúde bucal.
			</span>
		),
	},
	{
		title: 'escove a língua',
		image: tongue,
		description: (
			<span>
				A <Bold>saburra lingual</Bold> é uma das principais causas do mau hálito e deve ser{' '}
				<Bold>removida</Bold> com a escova ou um raspador de língua.
			</span>
		),
	},
	{
		title: 'escova',
		image: toothbrush,
		description: (
			<span>
				<Bold>Substitua</Bold> a escova a <Bold>cada 3 meses</Bold>, ou antes, se as cerdas
				estiverem deformadas. Use escovas de cerdas macias, retas e com cabeça pequena.
			</span>
		),
	},
	{
		title: 'creme dental',
		image: toothpaste,
		description: (
			<span>
				Use cremes dentais que contenham <Bold>flúor</Bold> para <Bold>fortalecer</Bold> o esmalte
				dos dentes e <Bold>prevenir</Bold> cáries.
			</span>
		),
	},
]
