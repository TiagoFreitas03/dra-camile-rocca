import type { ReactNode } from 'react'

interface ContactButtonProps {
	children: ReactNode
	className?: string
}

export function ContactButton({ children, className }: ContactButtonProps) {
	return (
		<button
			className={
				className +
				' bg-dark-red text-white border border-dark-red rounded-2xl shadow-2xl duration-300 hover:bg-white hover:text-dark-red cursor-pointer'
			}
		>
			{children}
		</button>
	)
}
