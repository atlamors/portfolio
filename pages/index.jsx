import Hero 		from '../components/sections/index/hero'
import Contact 		from '../components/sections/index/contact'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<About />						
			{<FeaturedProjects />}
			{/*<Contact />*/}
			{/*<Technical />*/}
			{/*<Career />*/}
		</>
	);
}