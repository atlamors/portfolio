// Core packages
import Icon from '../utils/icon.util'

// Utility packages
import space from '../utils/spacing.util';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ classProps, icon, title, copy }) {
	return (
		<>
		<span className={classProps}>
			<Icon icon={icon} />
		</span>
		<h3>{title}</h3>
		<p className={`${space('bottomXLrg')}`}>
			{copy}
		</p>
		</>
	)
}