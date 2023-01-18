// Uitlity packages
import Icon from '../utils/icon.util.jsx'
import Badges 	from '../utils/badge.list.util'

// Block sccs
import badges 	from '../../styles/blocks/badges.module.scss';

/**
 * Todo: this is more of a full component than a block
 * Refaction that later
 * 
 * @param {string} 	title to be displayed 
 * @param {array} 	list of badges to populate
 * @param {string}	block name for class name
 * @param {string} 	icon slug
 * @param {string} 	invertedColor string to assign inverted color class. //Refactor this prop
 * @param {string} 	headerIcon template literal class reference for the header icon container
 * @param {string}	classProps template literal class reference(s) for the container class(es)
 * @returns <BadgesBlock /> Container for badges component in the about section 
 */
export default function BadgesBlock({ title, list, block, icon, invertedColor, headerIcon, containerClass }) {
	return (
		<div className={`${badges.badgeBlockContainer} ${containerClass}`}>
			<span className={headerIcon}>
				<Icon icon={[ 'fat', icon ]} />
			</span>
			<h3>{title}</h3>
			<Badges list={list} block={block} invertedColor={invertedColor} />
		</div>
	)
}