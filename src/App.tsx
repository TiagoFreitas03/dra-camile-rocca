import { AboutMe } from './components/about-me'
import { Home } from './components/home'
import { Navbar } from './components/navbar'
import { Tips } from './components/tips'

export function App() {
	return (
		<div>
			<Navbar />

			<Home />
			<AboutMe />
			<Tips />
		</div>
	)
}
