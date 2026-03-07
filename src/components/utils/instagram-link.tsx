import type { ReactNode } from 'react'

interface InstagramLinkProps {
	children: ReactNode
	className?: string
}

export function InstagramLink({ children, className }: InstagramLinkProps) {
	return (
		<a
			href="https://www.instagram.com/dra.camilerocca/"
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			{children}
		</a>
	)
}
