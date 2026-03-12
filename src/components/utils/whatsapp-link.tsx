import type { ReactNode } from 'react'

interface WhatsAppLinkProps {
	children: ReactNode
	className?: string
}

export function WhatsAppLink({ children, className }: WhatsAppLinkProps) {
	const phoneNumber = '5512988096695'
	const message = 'Olá! Vim pelo site da Dra. Camile Rocca e gostaria de agendar uma consulta.'

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
