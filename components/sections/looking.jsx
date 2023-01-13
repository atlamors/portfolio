// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

// Specing util
import Spacing 		from '../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../blocks/section.grid.block'
import SectionTitle from '../blocks/section.title.block'

// Section scss
import looking 		from '../../styles/sections/looking.module.scss';
import section 		from '../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={looking.section}>	
			<Container classProp={`${section.title}`} spacing={['verticalXXXLrg']}>
				<h4>Im currently looking for employment as a</h4>
				<h2>Senior User Experience Designer</h2>
				{/* <h2>Senior <span className={looking.highlight}>User Experience</span> Designer</h2> */}
				<p className="subtitle">with a focus on Product Design.</p>
			</Container>
		</Section>
	)
}