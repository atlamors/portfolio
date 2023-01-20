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
			<style>
				{`
				:root[data-theme=dark] {
					--mesh-color-1: #060708;
					--mesh-color-2: #030805;
					--mesh-color-3: #05070a;
					--mesh-color-4: #120806;
				}
				`}
			</style>
			<Hero />
			<Looking />
			<About />
			<Technical />
			<Career />
		</>
	);
}