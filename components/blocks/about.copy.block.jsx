// Util packages
import Icon from '../utils/icon.util'

// Utility packages
import space from '../utils/spacing.util';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed
 * @param {string} 	position to be displayed 
 * @param {string} 	copy written content
 * @param {string} 	linkedin linkedin profile
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ containerClass, title, copy, position, linkedin }) {
	const {url, iconKey} = linkedin
	return (
		<>
		<div className={containerClass}>			
			<div style={{display:"flex"}}>
				<h3>{title}</h3>
				{/*<a href={url} rel="noreferrer" target="_blank"s><Icon icon={[ 'fab', "linkedin" ]}/></a>*/}
			</div>
						
			<h2>{position}</h2>
			<p>
				{copy}
			</p>
		</div>
		</>
	)
}