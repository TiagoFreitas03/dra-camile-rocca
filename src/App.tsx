import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { AboutMe } from './components/about-me'
import { Tips } from './components/tips'
import { Contact } from './components/contact'

export function App() {
	return (
		<div>
			<Navbar />

			<Home />
			<AboutMe />
			<Tips />
			<Contact />
		</div>
	)
}
