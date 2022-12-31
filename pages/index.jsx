// index.html
import Hero 
	from '../components/sections/hero'
import Looking
	from '../components/sections/looking'
import About
	from '../components/sections/about'
import Technical
	from '../components/sections/technical'

export default function HomePage() {

	return (
		<>
			<Hero />
			<Looking />
			<About />
			<Technical />
		</>
	);
}