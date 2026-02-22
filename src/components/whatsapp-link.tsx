import type { ReactNode } from 'react'

interface WhatsAppLinkProps {
	children: ReactNode
	className?: string
}

export function WhatsAppLink({ children, className }: WhatsAppLinkProps) {
	const phoneNumber = '5512991309804'
	const message = 'Olá! Vim do site e gostaria de mais informações.'

	return (
		<a
			href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			{children}
		</a>
	)
}
