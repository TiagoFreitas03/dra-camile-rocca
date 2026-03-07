import { useRef, useState, useEffect, type RefObject, type ReactNode } from 'react'
import clsx from 'clsx'

function useElementOnScreen<T extends Element>(ref: RefObject<T | null>): boolean {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsIntersecting(true)

				if (ref.current) {
					observer.unobserve(ref.current)
				}
			}
		})

		const currentElement = ref.current

		if (currentElement) {
			observer.observe(currentElement)
		}

		return () => {
			observer.disconnect()
		}
	}, [ref])

	return isIntersecting
}

interface FadeInProps {
	children: ReactNode
}

export function FadeIn({ children }: FadeInProps) {
	const ref = useRef<HTMLDivElement>(null)
	const onScreen = useElementOnScreen(ref)

	return (
		<div
			ref={ref}
			className={clsx('transition-transform-opacity duration-1000 ease-in-out transform', {
				'opacity-100': onScreen,
				'opacity-0': !onScreen,
				'translate-y-0': onScreen,
				'translate-y-8': !onScreen,
			})}
		>
			{children}
		</div>
	)
}
