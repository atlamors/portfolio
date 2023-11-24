// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Contact />
 */
export default function Contact() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				{/*<h4>CONTACT US</h4>*/}
				{/*<h2 className={looking.json}>Get in contact!</h2>*/}
				<a href='mailto:nicolas@rebulx.com?subject=First%20contact%20%7C%20%3CMy%20Company%20Name%3E&body=Hello%20RBX%20team!%0A%0A...'><h2 className={looking.jsonSub}><span className={looking.highlight}>👉 Haz clic aquí 👈</span></h2></a>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>y comienza con tu camino hacia la</span></h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Transformación Digital</span></h2>			
				<h2 className={looking.jsonSub}><span className={looking.highlight}>con nosotros</span></h2>
			</Container>
		</Section>
	)
}