import type { ReactNode } from 'react'
import { FadeIn } from './fade-in'

interface SectionProps {
	backgroundImageClass: string
	id: string
	children: ReactNode
}

export function Section({ backgroundImageClass, id, children }: SectionProps) {
	return (
		<FadeIn>
			<div
				className={`w-full max-w-480 md:min-h-screen overflow-hidden m-auto flex items-center bg-no-repeat bg-cover bg-fixed bg-center ${backgroundImageClass}`}
				id={id}
			>
				{children}
			</div>
		</FadeIn>
	)
}
