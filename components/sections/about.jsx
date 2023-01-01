import Section 		from '../structure/section';
import Container 	from '../structure/container';
import space 		from '../structure/space';

import BadgesBlock	from '../blocks/badges-block'

import about 		from '../../styles/sections/about.module.scss';




const { library } = require('@fortawesome/fontawesome-svg-core');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fat } from '@fortawesome/pro-thin-svg-icons'

library.add(fat)


export default function About() {

	const methods 	= [
		{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
		{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
		{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
		{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
		{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	]
	
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<Container classProp={`${about.header} ${about.container}`} spacing={['bottomXXLrg']}>
					<h4>Synopsis</h4>
					<h2>About Me</h2>
					<p className="subtitle">
						With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional.
					</p>
				</Container>
				<Container classProp={`${about.content} ${about.container}`}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" />
					</div>
					<div className={about.copy} >
						<span className={about.icon}>
							<FontAwesomeIcon icon={[ 'fat', 'ear-listen' ]} />
						</span>
						<h3>
							Softskills that pay the bills
						</h3>
						<p className={`${space('bottomXLrg')}`}>
							In addition to my technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a husband, father of two, and business owner / managing partner. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project.
						</p>
						<BadgesBlock 
							title="Methodologies that I practice" 
							list={methods} 
							block="methods" 
							icon="fingerprint"
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</Container>	
			</Container>
		</Section>
	)
}