import type { ReactNode } from 'react'

interface BoldProps {
	children: ReactNode
}

export function Bold({ children }: BoldProps) {
	return <span className="font-bold">{children}</span>
}
