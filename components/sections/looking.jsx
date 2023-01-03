// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

// Specing util
import Spacing 		from '../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../blocks/section.grid.block'

// Section scss
import looking 		from '../../styles/sections/looking.module.scss';

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={looking.section}>	
			<Container classProp={looking.copy} spacing={['verticalXXXLrg']}>
				<h2 className={looking.preHeader}>Im currently looking for employment as a</h2>
				<h2 className={`${looking.header} ${Spacing('verticalStd')}`}>Senior User Experience Designer</h2>
				<h2 className={looking.subHeader}>with a focus on Product Design.</h2>
			</Container>	
			<SectionGridBg />
		</Section>
	)
}