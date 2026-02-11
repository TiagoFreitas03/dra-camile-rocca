import type { ReactNode } from 'react'

interface SectionProps {
	backgroundImageUrl: string
	id: string
	children: ReactNode
}

export function Section({ backgroundImageUrl, id, children }: SectionProps) {
	return (
		<div
			className={`w-full max-w-480 h-screen max-h-245 m-auto flex items-center bg-no-repeat bg-center bg-[url(${backgroundImageUrl})]`}
			id={id}
		>
			{children}
		</div>
	)
}
