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
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ containerClass, title, copy, position }) {
	return (
		<>
		<div className={containerClass}>			
			<h3>{title}</h3>
			<h2>{position}</h2>
			<p>
				{copy}
			</p>
		</div>
		</>
	)
}