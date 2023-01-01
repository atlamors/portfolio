import Section 		from '../structure/section';
import Container 	from '../structure/container';

import space 		from '../structure/space';

import looking 		from '../../styles/sections/looking.module.scss';

export default function Looking() {

	return (
		<Section classProp={looking.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<h2 className={looking.preHeader}>Im currently looking for employment as a</h2>
				<h2 className={`${looking.header} ${space('verticalStd')}`}>Senior User Experience Designer</h2>
				<h2 className={looking.subHeader}>with a focus on Product Design.</h2>
			</Container>	
		</Section>
	)
}