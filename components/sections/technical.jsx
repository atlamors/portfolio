import Section 		from '../structure/section';
import Container 	from '../structure/container';
import space 		from '../structure/space';

import BadgesBlock	from '../blocks/badges-block'

import about 		from '../../styles/sections/about.module.scss';


const { library } = require('@fortawesome/fontawesome-svg-core');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fat } from '@fortawesome/pro-thin-svg-icons'
library.add(fat)


export default function Technical() {

	const software 	= [
		{ key: 'photoshop', 		name: 'Photoshop', 			type: 'devicon' },
		{ key: 'illustrator', 		name: 'Illustator', 			type: 'devicon' },
		{ key: 'figma', 		name: 'Figma', 					type: 'devicon' },
		{ key: 'vscode', 		name: 'VSCode', 				type: 'devicon' },
		{ key: 'mailbox', 		name: 'Postman', 				type: 'fad' },
		{ key: 'computer-mouse', 		name: 'Click Up', 				type: 'fad' },
	]
	const tech 	= [
		{ key: 'javascript', 	name: 'JavaScript', 			type: 'devicon' },
		{ key: 'react', 		name: 'React', 					type: 'devicon' },
		{ key: 'nextjs', 		name: 'NextJS', 				type: 'devicon' },
		{ key: 'nodejs', 		name: 'NodeJS', 				type: 'devicon' },
		{ key: 'php', 			name: 'PHP', 					type: 'devicon' },
		{ key: 'wordpress', 	name: 'WordPress', 				type: 'devicon' },
		{ key: 'woocommerce', 	name: 'WooCommerce', 			type: 'devicon' },
		{ key: 'html5', 		name: 'HTML5', 					type: 'devicon' },
		{ key: 'css3', 			name: 'CSS3', 					type: 'devicon' },
		{ key: 'sass', 			name: 'SASS', 					type: 'devicon' },
		{ key: 'git', 			name: 'Git', 					type: 'devicon' },
		{ key: 'mysql', 		name: 'MySQL', 					type: 'devicon' },
		{ key: 'mongodb', 		name: 'MongoDB', 				type: 'devicon' },
	]
	
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLarge']}>
				<Container classProp={`${about.header} ${about.container}`} spacing={['verticalXXLarge']}>
					<h4>Hardskills</h4>
					<h2>Technical</h2>
					<p className="subtitle">
					As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages.
					</p>
				</Container>
				<Container classProp={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<span className={about.icon}>
							<FontAwesomeIcon icon={[ 'fat', 'chart-network' ]} />
						</span>
						<h3>
							Polymath foundations
						</h3>
						<p className={`${space('bottomXLarge')}`}>
							With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends.
						</p>
						<BadgesBlock 
							title="Software I love to create with" 
							list={software} 
							block="software" 
							icon="grid-2-plus"
							//invertedColor="invertedColor" 
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							list={tech} 
							block="tech" 
							icon="laptop-code"
							//invertedColor="invertedColor"
							headerIcon={about.icon} 
						/>
					</div>
					<div className={about.image}>
						<img src="/img/mobile-menu.jpg" />
					</div>
				</Container>	
			</Container>
		</Section>
	)
}