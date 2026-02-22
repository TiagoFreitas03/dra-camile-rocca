import type { ReactNode } from 'react'

interface HoverBackgroundEffectProps {
	children: ReactNode
	className?: string
}

export function HoverBackgroundEffect({ children, className }: HoverBackgroundEffectProps) {
	return (
		<span
			className={
				className +
				' bg-dark-red text-white border border-dark-red rounded-2xl shadow-2xl transition-colors duration-300 hover:bg-white hover:text-dark-red'
			}
		>
			{children}
		</span>
	)
}
