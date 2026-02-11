import type { ReactNode } from 'react'

interface SectionProps {
	backgroundImageClass: string
	id: string
	children: ReactNode
}

export function Section({ backgroundImageClass, id, children }: SectionProps) {
	return (
		<div
			className={`w-full max-w-480 h-screen max-h-245 m-auto flex items-center bg-no-repeat bg-center ${backgroundImageClass}`}
			id={id}
		>
			{children}
		</div>
	)
}
