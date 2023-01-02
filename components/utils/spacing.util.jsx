import spaces from '../../styles/structure/space.module.scss';

/**
 * (S)CSS class factory for spacial geomtry module.
 * 
 * @param {*} spacing 
 * @returns 
 */
export default function space( spacing ) {
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