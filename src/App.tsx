import { AboutMe } from './components/about-me'
import { Home } from './components/home'
import { Navbar } from './components/navbar'

export function App() {
	return (
		<div>
			<Navbar />

			<Home />

			<AboutMe />
		</div>
	)
}
