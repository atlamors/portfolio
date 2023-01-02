// Utility scss
import spaces from '../../styles/utils/spacing.module.scss';

/**
 * Selector class factory for spacial geomtry utility component
 * 
 * @param 	{array} 	spacing array of strings to select spacing class
 * @returns {string} 	returns string of class references
 */
export default function Spacing( spacing ) {
	let classes = [];
	if ( Array.isArray(spacing) ) {
		spacing.forEach( space => {
			classes.push( spaces[space] );
		});
	} else {
		classes.push( spaces[spacing] );
	}
	return classes.join(' ');
}