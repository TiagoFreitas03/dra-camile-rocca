import { FaRegCheckCircle as Check } from 'react-icons/fa'

interface FooterListItemProps {
	text: string
}

export function FooterListItem({ text }: FooterListItemProps) {
	return (
		<span className="flex items-center gap-6 text-white text-3xl font-inter">
			<Check size={44} color="black" /> {text}
		</span>
	)
}
