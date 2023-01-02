// Core packages
import Image from 'next/image'

// Section structure
import Section from '../structure/section';
import Container from '../structure/container';

// Section general blocks
import SectionTitle from '../blocks/section.title.block'
import SectionGridBg from '../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../blocks/about.badges.block'
import CopyBlock from '../blocks/about.copy.block'

// Section scss
import about from '../../styles/sections/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<Container classProp={`${about.header} ${about.container}`} spacing={['bottomXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				/>
				</Container>
				<Container classProp={`${about.content} ${about.container}`}>
					<div className={about.image}>
						{/* <img src="/img/family-photo.jpg" /> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							classProps={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock 
							title="Methodologies that I practice" 
							classProps={''}
							list={methods} 
							block="methods" 
							icon="fingerprint"
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</Container>	
			</Container>
			<SectionGridBg />
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
]