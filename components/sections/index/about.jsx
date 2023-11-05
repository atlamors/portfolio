// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

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
				<SectionTitle
					title="Meet the REBULX team"
					preTitle="About us"
					subTitle="We are a group of people facinated about technology. Our focus is on innovation and digital transformation."
				/>
				<section className={about.content}>
					{/*Esto se puede mejorar creando un nuevo componente*/}
					{/*Juan*/}
					<div className={about.image}>
						<img src="/img/team/juan.jpeg" alt="Nelson family photo"/>
						<div className={about.copy} >
							<CopyBlock 
								title="Juan Alberto Medina"
								position="Business Intelligence and AI"
								containerClass={about.container}							
								copy="Industrial Engineer with a master's degree in artificial intelligence."								
							/>
						</div>					
					</div>

					{/*Nico*/}
					<div className={about.image}>
						<img src="/img/team/nico.jpeg" alt="Nelson family photo"/>
						<div className={about.copy} >
							<CopyBlock 
								title="Nicolás Serignese"
								position="Digital Transformation"
								containerClass={about.container}							
								copy="I'm a dedicated systems student and passionate technology enthusiast with over 7 years of valuable experience in the consulting and tech industries. I'm on a continuous quest for knowledge, always seeking innovative solutions to complex challenges. My journey in the world of technology has taught me the importance of adaptability, problem-solving, and staying curious. Join me as I explore the ever-evolving landscape of technology and share my insights along the way."
							/>
						</div>					
					</div>
					
					{/*Tomi*/}
					<div className={about.image}>
						<img src="/img/team/tomi.jpeg" alt="Nelson family photo"/>
						<div className={about.copy} >
							<CopyBlock 
								title="Tomás Mongelós"
								position="Software Development"
								containerClass={about.container}
								copy="Tomi's description."
							/>
							{/*<BadgesBlock 
								title="Reasearch and planning" 
								containerClass={about.container}
								list={methods} 
								fullContainer="fullContainer"
								block="methods" 
								icon="fingerprint"
								copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
								//invertedColor="invertedColor"
								headerIcon={`${about.icon}`}
	/>*/}
						</div>					
					</div>


				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]