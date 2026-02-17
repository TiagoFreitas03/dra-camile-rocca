import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { AboutMe } from './components/about-me'
import { Tips } from './components/tips'
import { Contact } from './components/contact'
import { Services } from './components/services'
import { Footer } from './components/footer'

export function App() {
	return (
		<div>
			<Navbar />

			<Home />
			<AboutMe />
			<Tips />
			<Services />
			<Contact />

			<Footer />
		</div>
	)
}
