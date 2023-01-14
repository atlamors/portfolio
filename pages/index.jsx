import Hero 
	from '../components/sections/hero'
import Looking
	from '../components/sections/looking'
import About
	from '../components/sections/about'
import Technical
	from '../components/sections/technical'
import Career
	from '../components/sections/career'

export default function HomePage() {

	return (
		<>
			<Hero />
			<Looking />
			<About />
			<Technical />
			<Career />
		</>
	);
}