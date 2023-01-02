// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

// Specing util
import Space 		from '../utils/spacing.util';

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
				<h2 className={`${looking.header} ${Space('verticalStd')}`}>Senior User Experience Designer</h2>
				<h2 className={looking.subHeader}>with a focus on Product Design.</h2>
			</Container>	
			<div className="Section__background">
				<div className="Guides" aria-hidden="true">
					<div className="Guides__container">
						<div className="Guides__guide"></div>
						<div className="Guides__guide"></div>
						<div className="Guides__guide"></div>
						<div className="Guides__guide"></div>
						<div className="Guides__guide"></div>
					</div>
				</div>
			</div>
		</Section>
	)
}