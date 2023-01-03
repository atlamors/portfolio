/**
* Personal portfolio website.
* 
* Version: 1.0
* Author: Andrew Nelson
* Website: https://andrewnelson.net
* Liscence: MIT
* 
* index.html
*/

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
	/**
	* Project todo:
	* 
	* Move main section margin init into here, but still pass it down to inside the section.
	* We want to keep the margins inside the sections to prevent them from bleeding into each other.
	* 
	* Clean all code up to make it more modular and dry, and matching syntax formatting.
	*/
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