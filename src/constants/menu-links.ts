interface MenuLink {
	href: string
	text: string
	visibleInMobile?: boolean
}

export const menuLinks: MenuLink[] = [
	{ href: '#home', text: 'home', visibleInMobile: false },
	{ href: '#about-me', text: 'Sobre mim' },
	{ href: '#tips', text: 'Dicas' },
	{ href: '#services', text: 'Serviços' },
	{ href: '#contact', text: 'Contato' },
]
