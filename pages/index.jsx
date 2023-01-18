import Hero 
	from '../components/sections/index/hero'
import Looking
	from '../components/sections/index/looking'
import About
	from '../components/sections/index/about'
import Technical
	from '../components/sections/index/technical'
import Career
	from '../components/sections/index/career'

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