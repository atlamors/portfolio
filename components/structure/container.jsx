// Utility packages
import Spacing from '../utils/spacing.util';

// Structure scss
import styles from '../../styles/structure/container.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 *          ¯¯¯¯¯¯¯¯¯¯¯
 * @param {string}	classProp template literals of classes for container
 * @param {array} 	spacing array of strings for Spacing utility
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Container />
 */
export default function Container({ classProp, spacing, children }) {

	const _class = classProp ? classProp : '';

	return ( 
		<div className={`${styles.readingWidth} ${_class} ${Spacing(spacing)}`}>
			{children}
		</div>
	);
}