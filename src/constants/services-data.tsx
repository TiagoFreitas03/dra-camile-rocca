import type { ReactNode } from 'react'

import { Bold } from '@/components/bold'
import tooth from '../images/tooth.png'
import tool1 from '../images/tool.png'
import tool2 from '../images/tool-2.png'

interface Service {
	title: string
	icon: string
	description: ReactNode
}

export const services: Service[] = [
	{
		title: 'clareamento',
		icon: tooth,
		description: (
			<span>
				Tratamento indicado para <Bold>remover</Bold> manchas e escurecimentos dos dentes,
				proporcionando um sorriso mais branco e iluminado. Realizado com{' '}
				<Bold>técnicas seguras</Bold>, oferecendo resultados <Bold>naturais</Bold> e{' '}
				<Bold>eficazes</Bold>.
			</span>
		),
	},
	{
		title: 'raspagem',
		icon: tool1,
		description: (
			<span>
				Procedimento essencial para a saúde bucal, responsável pela remoção de tártaro e placa
				bacteriana acumulados nos dentes. Ajuda a prevenir inflamações e doenças periodontais,
				mantendo a gengiva saudável.
			</span>
		),
	},
	{
		title: 'facetas em resina',
		icon: tooth,
		description: (
			<span>
				<Bold>Procedimento estético</Bold> que corrige imperfeições nos dentes, como manchas,
				pequenas fraturas, desalinhamentos e espaços. As facetas em resina <Bold>melhoram</Bold> o
				formato, a cor e a harmonia do sorriso de forma rápida.
			</span>
		),
	},
	{
		title: 'exodontias simples',
		icon: tool2,
		description: (
			<span>
				Extração de dentes que não podem ser recuperados, realizada de forma <Bold>cuidadosa</Bold>{' '}
				e <Bold>segura</Bold>. Indicada em casos específicos, sempre priorizando o conforto do
				paciente e uma recuperação tranquila.
			</span>
		),
	},
	{
		title: 'serviços protéticos',
		icon: tooth,
		description: (
			<span>
				Os serviços protéticos têm como <Bold>objetivo</Bold> reabilitar dentes comprometidos,
				devolvendo função, estética e harmonia ao sorriso. Por meio de próteses fixas ou removíveis,
				é possível <Bold>restaurar</Bold> e <Bold>proporcionar</Bold> mais segurança e qualidade de
				vida ao paciente.
			</span>
		),
	},
	{
		title: 'endodontia',
		icon: tool2,
		description: (
			<span>
				A endodontia é a especialidade responsável pelo tratamento de canal. O procedimento é
				indicado quando há <Bold>comprometimento</Bold> da parte <Bold>interna do dente</Bold>,
				geralmente causado por cáries ou traumas. O tratamento elimina a dor, remove a infecção e
				preserva o dente natural sempre que possível.
			</span>
		),
	},
	{
		title: 'atendimento infantil',
		icon: tooth,
		description: (
			<span>
				O atendimento infantil é realizado de forma <Bold>humanizada</Bold> e{' '}
				<Bold>acolhedora</Bold>. O acompanhamento desde cedo contribui para a <Bold>prevenção</Bold>{' '}
				de problemas bucais e para a formação de hábitos saudáveis de higiene oral.
			</span>
		),
	},
]
