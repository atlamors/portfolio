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
				<a href='test'><h2 className={looking.jsonSub}><span className={looking.highlight}>Click here 👈</span></h2></a>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>and start your</span></h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Digital Transformation Journey</span></h2>			
				<h2 className={looking.jsonSub}><span className={looking.highlight}>with us!</span></h2>
			</Container>
		</Section>
	)
}