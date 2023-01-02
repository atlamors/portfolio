// Utility components
import Icon from '../utils/icon.util.jsx'

/**
 * scss reference for utils should probably be pulled in from the first component under the section
 */
import badges from '../../styles/blocks/badges.module.scss';

/**
 * 
 * @param {array} 	list of badges to populate
 * @param {string}	block name for class name
 * @param {string} 	invertedColor string to assign inverted color class. //Refactor this prop
 * @returns <Badges />
 */
export default function Badges({ list, block, invertedColor }) {
	return (
		<ul className={`${badges.list} ${badges[block]} ${badges[invertedColor]}`}>
			{
			list.map( ({ key, name, type }) => {
				return ( 
					<li key={name} className={`${badges.item} ${key}`}>
						<IconModule iconKey={key} iconType={type} />
						<span>{name}</span>
					</li> 
				)
			}) 
			}
		</ul>
	)
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function IconModule({ iconKey, iconType }) {
	switch (iconType) {
		case 'far':
		case 'fad':
		case 'fat':
		case 'fas':
			return ( <Icon icon={[ iconType, iconKey ]} /> )
		case 'devicon':
			return ( <i className={`devicon-${iconKey}-plain colored`} /> )
		default:
			return ( '' )
	}
}

