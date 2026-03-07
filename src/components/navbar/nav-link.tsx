export function NavLink(props: React.ComponentProps<'a'>) {
	return (
		<li className="uppercase text-white xl:text-xl xl:mx-5 group relative w-max cursor-pointer">
			<span className="absolute -top-1 right-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full" />
			<a {...props}>{props.children}</a>
			<span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full" />
		</li>
	)
}
